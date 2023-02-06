using businessImprovementAcademy.api.Services.Common;
using businessImprovementAcademy.api.Models;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using Newtonsoft.Json;

namespace businessImprovementAcademy.api.Services
{
    public class EmailService : ServiceBase
    {
        private readonly BusinessImprovementAcademyContext _context;
        public EmailService(BusinessImprovementAcademyContext context)
        {
            _context = context;
        }

        public async Task<Response> SendEmailAsync(
            string emailFrom,
            string emailFromName,
            string apiKey,
            string userEmail,
            string userFirstname,
            string userLastname,
            int totalScore,
            string reportComment,
            int nineTotTen,
            int sixToEight,
            int zeroToFive)
        {
            var client = new SendGridClient(apiKey);

            var newDynamicTemplateData = new DynamicTemplateData
            {
                param = new Param
                {
                    Firstname = userFirstname,
                    Lastname = userLastname,
                    TotalScore = totalScore.ToString(),
                    ReportComment = reportComment,
                    NineToTen = nineTotTen.ToString(),
                    SixToEight = sixToEight.ToString(),
                    ZeroToFive = zeroToFive.ToString()
                }
            };
            var dynamicSerialized = JsonConvert.SerializeObject(newDynamicTemplateData);

            var msg = new SendGridMessage();
            msg.SetFrom(new EmailAddress(emailFrom, emailFromName));
            msg.AddTo(new EmailAddress(userEmail, string.Format("{0} {1}", userFirstname, userLastname)));
            msg.SetTemplateId(Environment.GetEnvironmentVariable("TemplateId"));

            var bcc = Environment.GetEnvironmentVariable("SendBcc") ?? string.Empty;
            if (!string.IsNullOrWhiteSpace(bcc))
                msg.AddBcc(bcc, Environment.GetEnvironmentVariable("BccDisplayName") ?? string.Empty);

            DynamicTemplateData dynamicTemplateData = JsonConvert.DeserializeObject<DynamicTemplateData>(dynamicSerialized);
            msg.SetTemplateData(dynamicTemplateData);
            var response = await client.SendEmailAsync(msg);

            return response;
        }
    }
}