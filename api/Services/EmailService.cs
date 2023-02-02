using businessImprovementAcademy.api.Services.Common;
using businessImprovementAcademy.api.Models;
using System;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;
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
            string userEmail,
            string userFirstname,
            string userLastname,
            string apiKey)
        {
            var client = new SendGridClient(apiKey);

            var newDynamicTemplateData = new DynamicTemplateData
            {
                param = new Param
                {
                    Firstname = userFirstname,
                    Lastname = userLastname,
                    TotalScore = "50",
                    ReportComment = "this is a test comment",
                    NineToTen = "2",
                    SixToEight = "3",
                    ZeroToFive = "1"
                }
            };
            var dynamicSerialized = JsonConvert.SerializeObject(newDynamicTemplateData);

            var msg = new SendGridMessage();
            msg.SetFrom(new EmailAddress(emailFrom, emailFromName));
            msg.AddTo(new EmailAddress(userEmail, string.Format("{0} {1}", userFirstname, userLastname)));
            msg.SetTemplateId(Environment.GetEnvironmentVariable("TemplateId"));

            DynamicTemplateData dynamicTemplateData = JsonConvert.DeserializeObject<DynamicTemplateData>(dynamicSerialized);
            msg.SetTemplateData(dynamicTemplateData);
            var response = await client.SendEmailAsync(msg);

            return response;
        }
    }
}