using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entities;

namespace Models.EntityConfigurations
{
    class ClubAndSocietyConfiguration : IEntityTypeConfiguration<ClubAndSociety>
    {
        public void Configure(EntityTypeBuilder<ClubAndSociety> builder)
        {
            
                builder.Property(e => e.Id).HasColumnName("ID");

                builder.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
           
        }
    }
}
