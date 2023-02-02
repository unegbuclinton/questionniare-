using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace businessImprovementAcademy.api.Models
{
    #region DynamicTemplateData
    [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
    public class DynamicTemplateData
    {
        public Param param { get; set; }
    }

    [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
    public class Param
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string TotalScore { get; set; }
        public string ReportComment { get; set; }
        public string NineToTen { get; set; }
        public string SixToEight { get; set; }
        public string ZeroToFive { get; set; }
    }
    #endregion
}