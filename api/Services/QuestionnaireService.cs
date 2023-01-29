using businessImprovementAcademy.api.Services.Common;
using businessImprovementAcademy.api.Models;
using System.Linq;
using System;
using System.Threading.Tasks;

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

        public bool InsertAnswer(Answer answer)
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