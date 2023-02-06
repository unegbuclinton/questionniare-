using businessImprovementAcademy.api.Services.Common;
using businessImprovementAcademy.api.Models;
using System.Linq;
using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace businessImprovementAcademy.api.Services
{
    public class QuestionnaireService : ServiceBase
    {
        private readonly BusinessImprovementAcademyContext _context;
        public QuestionnaireService(BusinessImprovementAcademyContext context)
        {
            _context = context;
        }

        public object GetQuestionnaire()
        {
            return new
            {
                questionnarie = _context.Questionnaire
                    .Select(s => new { s.Id, s.InitialStepTitle, s.InitialStepContent, s.FinalStepTitle, s.FinalStepContent, s.WelcomeImageUrl }).FirstOrDefault(),
                questionnarieItems = _context.QuestionnaireItem
                    .OrderBy(o => o.Order)
                    .Select(s => new { s.Id, s.QuestionnaireId, s.Title, s.Subtitle, s.Question, s.ImageUrl, s.Order })
            };
        }

        public async Task<bool> InsertAnswer(Answer answer)
        {
            if (!answer.AnswerItem.Any())
                throw new Exception("Questionnarie has no answers");

            var newAnswer = new Answer
            {
                UserFirstName = answer.UserFirstName,
                UserLastName = answer.UserLastName,
                Email = answer.Email,
                DateUtc = DateTime.UtcNow
            };

            _context.Answer.Add(newAnswer);
            _context.SaveChanges();

            answer.Id = newAnswer.Id;
            InsertAnswerItem(answer);

            var totalScore = _context.AnswerItem.Where(x => x.AnswerId == answer.Id).Sum(x => x.Score);
            var nineToTen = _context.AnswerItem.Where(x => x.AnswerId == answer.Id).Count(x => x.Score >= 9);
            var sixToEight = _context.AnswerItem.Where(x => x.AnswerId == answer.Id).Count(x => x.Score >= 6 && x.Score <= 8);
            var zeroToFive = _context.AnswerItem.Where(x => x.AnswerId == answer.Id).Count(x => x.Score <= 5);
            var reportComment = _context.ReportResult.First(x => totalScore >= x.MinScore && totalScore <= x.MaxScore).Comment;

            var emailService = new EmailService(GetNewContext());
            var response = await emailService.SendEmailAsync(
                Environment.GetEnvironmentVariable("EmailFrom") ?? string.Empty,
                Environment.GetEnvironmentVariable("EmailFromName") ?? string.Empty,
                Environment.GetEnvironmentVariable("SendgridApiKey") ?? string.Empty,
                answer.Email,
                answer.UserFirstName,
                answer.UserLastName,
                totalScore,
                reportComment,
                nineToTen,
                sixToEight,
                zeroToFive);
            return true;
        }

        private void InsertAnswerItem(Answer answer)
        {
            foreach (var item in answer.AnswerItem)
            {
                var question = _context.QuestionnaireItem.FirstOrDefault(x => x.Id == item.QuestionnaireItemId);

                if (question == null)
                    throw new Exception(string.Format("Not Found question ID {0}", item.QuestionnaireItemId));

                item.AnswerId = answer.Id;
                item.Title = question.Title;
                item.Subtitle = question.Subtitle;
                item.Question = question.Question;
                item.Order = question.Order;

                _context.Add(item);
            }
            _context.SaveChanges();
        }
    }
}