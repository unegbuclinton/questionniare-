using businessImprovementAcademy.api.Services.Common;
using businessImprovementAcademy.api.Models;
using System.Linq;

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
    }
}