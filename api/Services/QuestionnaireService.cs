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
                questionnarie = _context.Questionnaire,
                questionnarieItems = _context.QuestionnaireItem
            };
        }

    }

}