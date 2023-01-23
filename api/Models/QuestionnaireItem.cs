namespace businessImprovementAcademy.api.Models
{
    public partial class QuestionnaireItem
    {
        public int Id { get; set; }
        public int? QuestionnaireId { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string Question { get; set; }
        public string ImageUrl { get; set; }
        public int Order { get; set; }

        public virtual Questionnaire Questionnaire { get; set; }
    }
}
