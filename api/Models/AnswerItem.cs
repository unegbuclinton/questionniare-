namespace businessImprovementAcademy.api.Models
{
    public partial class AnswerItem
    {
        public int Id { get; set; }
        public int AnswerId { get; set; }
        public int QuestionnaireItemId { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string Question { get; set; }
        public int Order { get; set; }
        public int Score { get; set; }

        public virtual Answer Answer { get; set; }
        public virtual QuestionnaireItem QuestionnaireItem { get; set; }
    }
}
