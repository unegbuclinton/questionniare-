using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using Newtonsoft.Json;
using businessImprovementAcademy.api.Models;
using businessImprovementAcademy.api.Services;

[assembly: FunctionsStartup(typeof(businessImprovementAcademy.api.Startup))]

namespace businessImprovementAcademy.api
{
    class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            string SqlConnection = Environment.GetEnvironmentVariable("SqlConnectionString");
            builder.Services.AddScoped<QuestionnaireService>();
            builder.Services.AddDbContext<BusinessImprovementAcademyContext>(
                options => options.UseSqlServer(SqlConnection));

            JsonConvert.DefaultSettings = () => new JsonSerializerSettings
            {
                Formatting = Formatting.Indented,
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };
        }
    }
}