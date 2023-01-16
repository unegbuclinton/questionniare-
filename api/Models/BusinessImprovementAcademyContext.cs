﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace businessImprovementAcademy.api.Models
{
    public partial class BusinessImprovementAcademyContext : DbContext
    {
        public BusinessImprovementAcademyContext()
        {
        }

        public BusinessImprovementAcademyContext(DbContextOptions<BusinessImprovementAcademyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Answer> Answer { get; set; }
        public virtual DbSet<AnswerItem> AnswerItem { get; set; }
        public virtual DbSet<Questionnaire> Questionnaire { get; set; }
        public virtual DbSet<QuestionnaireItem> QuestionnaireItem { get; set; }

        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     if (!optionsBuilder.IsConfigured)
        //     {
        //         optionsBuilder.UseSqlServer("Server=localhost;Database=BusinessImprovementAcademy;Trusted_Connection=True;ConnectRetryCount=0");
        //     }
        // }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Answer>(entity =>
            {
                entity.Property(e => e.DateUtc)
                    .HasColumnName("DateUTC")
                    .HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UserFirstName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UserLastName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AnswerItem>(entity =>
            {
                entity.Property(e => e.Question)
                    .IsRequired()
                    .HasMaxLength(1000);

                entity.Property(e => e.Subtitle).HasMaxLength(1000);

                entity.Property(e => e.Title).HasMaxLength(1000);

                entity.HasOne(d => d.Answer)
                    .WithMany(p => p.AnswerItem)
                    .HasForeignKey(d => d.AnswerId)
                    .HasConstraintName("FK__AnswerIte__Answe__3D5E1FD2");
            });

            modelBuilder.Entity<Questionnaire>(entity =>
            {
                entity.Property(e => e.FinalStep).HasMaxLength(1000);

                entity.Property(e => e.InitialStep).HasMaxLength(1000);
            });

            modelBuilder.Entity<QuestionnaireItem>(entity =>
            {
                entity.Property(e => e.ImageUrl)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Question)
                    .IsRequired()
                    .HasMaxLength(1000);

                entity.Property(e => e.Subtitle).HasMaxLength(1000);

                entity.Property(e => e.Title).HasMaxLength(1000);

                entity.HasOne(d => d.Questionnaire)
                    .WithMany(p => p.QuestionnaireItem)
                    .HasForeignKey(d => d.QuestionnaireId)
                    .HasConstraintName("FK__Questionn__Quest__3C69FB99");
            });
        }

        public class BusinessImprovementAcademyContextFactory : IDesignTimeDbContextFactory<BusinessImprovementAcademyContext>
        {
            public BusinessImprovementAcademyContext CreateDbContext(string[] args)
            {
                var optionsBuilder = new DbContextOptionsBuilder<BusinessImprovementAcademyContext>();
                optionsBuilder.UseSqlServer(Environment.GetEnvironmentVariable("SqlConnectionString"));

                return new BusinessImprovementAcademyContext(optionsBuilder.Options);
            }
        }
    }
}
