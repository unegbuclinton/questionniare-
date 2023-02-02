namespace businessImprovementAcademy.api.Models
{
    public partial class ReportResult
    {
        public int Id { get; set; }
        public int MinScore { get; set; }
        public int MaxScore { get; set; }
        public string Comment { get; set; }
        public decimal? GroupPct { get; set; }
    }
}
