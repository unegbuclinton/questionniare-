using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using businessImprovementAcademy.api.Models;

namespace businessImprovementAcademy.api.Services.Common
{
    public class ServiceBase
    {
        protected const int PAGE_SIZE = 25;

        protected int CalculateStart(int pageNumber)
        {
            return (pageNumber * PAGE_SIZE) - PAGE_SIZE;
        }

        public BusinessImprovementAcademyContext GetNewContext()
        {
            string SqlConnection = Environment.GetEnvironmentVariable("SqlConnectionString");
            var optionsBuilder = new DbContextOptionsBuilder<BusinessImprovementAcademyContext>();
            optionsBuilder.UseSqlServer(SqlConnection);
            return new BusinessImprovementAcademyContext(optionsBuilder.Options);
        }
    }
}