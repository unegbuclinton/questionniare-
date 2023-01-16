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
        public string InitialStep { get; set; }
        public string FinalStep { get; set; }

        public virtual ICollection<QuestionnaireItem> QuestionnaireItem { get; set; }
    }
}
