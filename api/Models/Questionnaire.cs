using System;
using System.Collections.Generic;

namespace businessImprovementAcademy.api.Models
{
    public partial class Questionnaire
    {
        public Questionnaire()
        {
            QuestionnaireItem = new HashSet<QuestionnaireItem>();
        }

        public int Id { get; set; }
        public string InitialStepTitle { get; set; }
        public string InitialStepContent { get; set; }
        public string WelcomeImageUrl { get; set; }
        public string FinalStepTitle { get; set; }
        public string FinalStepContent { get; set; }

        public virtual ICollection<QuestionnaireItem> QuestionnaireItem { get; set; }
    }
}
