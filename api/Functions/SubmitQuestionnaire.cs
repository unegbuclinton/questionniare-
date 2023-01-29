using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using businessImprovementAcademy.api.Services;
using System.Net;
using businessImprovementAcademy.api.Models;
using System.IO;
using System.Threading.Tasks;

namespace businessImprovementAcademy.api.Functions
{
    public class SubmitQuestionnaire
    {
        private readonly QuestionnaireService _questionnarieService;

        public SubmitQuestionnaire(QuestionnaireService questionnarieService)
        {
            _questionnarieService = questionnarieService;
        }

        [FunctionName("SubmitQuestionnaire")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ExecutionContext executionContext,
            ILogger log)
        {
            var functionName = executionContext.FunctionName;
            log.LogInformation("Function " + functionName + " processed a request.");

            try
            {
                var content = await new StreamReader(req.Body).ReadToEndAsync();

                Answer answer = JsonConvert.DeserializeObject<Answer>(content);

                var inserted = _questionnarieService.InsertAnswer(answer);

                var returnObj = new
                {
                    meta = new { },
                    data = inserted,
                    status = new { statusCode = HttpStatusCode.OK, message = "" }
                };

                return new OkObjectResult(JsonConvert.SerializeObject(returnObj));
            }
            catch (System.Exception e)
            {
                var errorMessage = e.Message + (e.InnerException == null ? string.Empty : e.InnerException.Message);

                log.LogError("Function " + functionName + " error :" + errorMessage);

                var returnObjErr = new
                {
                    meta = new { },
                    data = new { },
                    status = new { statusCode = HttpStatusCode.InternalServerError, message = errorMessage }
                };

                return new BadRequestObjectResult(JsonConvert.SerializeObject(returnObjErr));
            }
        }
    }
}
