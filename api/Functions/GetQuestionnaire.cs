using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using businessImprovementAcademy.api.Services;
using System.Net;

namespace businessImprovementAcademy.api.Functions
{
    public class GetQuestionnaire
    {
        private readonly QuestionnaireService _questionnarieService;

        public GetQuestionnaire(QuestionnaireService questionnarieService)
        {
            _questionnarieService = questionnarieService;
        }

        [FunctionName("GetQuestionnaire")]
        public IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ExecutionContext executionContext,
            ILogger log)
        {
            var functionName = executionContext.FunctionName;

            try
            {
                var questionnarie = _questionnarieService.GetQuestionnaire();

                var returnObj = new
                {
                    meta = new { },
                    data = questionnarie,
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
