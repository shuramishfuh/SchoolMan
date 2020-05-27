﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entities;

namespace Models.EntityConfigurations
{
    internal class AdminConfiguration : IEntityTypeConfiguration<Admin>
    {
        public void Configure(EntityTypeBuilder<Admin> builder)
        {
            builder.Property(e => e.Id).HasColumnName("ID");

            builder.Property(e => e.Dob)
                .HasColumnName("DOB")
                .HasColumnType("date")
                .IsRequired();

            builder.Property(e => e.Email)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.Password)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.SignUp)
                .HasColumnType("date")
                .HasDefaultValueSql("GetDate()");

            builder.Property(e => e.UserName)
                .IsRequired()
                .HasMaxLength(50);
        }
    }
}