using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using Newtonsoft.Json;
using businessImprovementAcademy.api.Models;
using businessImprovementAcademy.api.Services;
using AzureFunctions.Extensions.Swashbuckle;
using Microsoft.Azure.WebJobs.Hosting;
using AzureFunctions.Extensions.Swashbuckle.Settings;
using System.Reflection;
using Swashbuckle.AspNetCore.SwaggerGen;

[assembly: FunctionsStartup(typeof(businessImprovementAcademy.api.Startup))]
[assembly: WebJobsStartup(typeof(businessImprovementAcademy.api.Startup))]

namespace businessImprovementAcademy.api
{
    class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            string SqlConnection = Environment.GetEnvironmentVariable("SqlConnectionString");
            builder.Services.AddScoped<QuestionnaireService>();
            builder.Services.AddScoped<EmailService>();
            builder.Services.AddDbContext<BusinessImprovementAcademyContext>(
                options => options.UseNpgsql(SqlConnection));

            JsonConvert.DefaultSettings = () => new JsonSerializerSettings
            {
                Formatting = Formatting.Indented,
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };

            builder.AddSwashBuckle(Assembly.GetExecutingAssembly(), opts =>
            {
                opts.AddCodeParameter = true;
                opts.Documents = new[] {
                    new SwaggerDocument {
                        Name = "v1",
                            Title = "Swagger document",
                            Description = "Integrate Swagger UI With Azure Functions",
                            Version = "v2"
                    }
                };
                opts.ConfigureSwaggerGen = x =>
                {
                    x.CustomOperationIds(apiDesc =>
                    {
                        return apiDesc.TryGetMethodInfo(out MethodInfo mInfo) ? mInfo.Name : default(Guid).ToString();
                    });
                };
            });
        }
    }
}