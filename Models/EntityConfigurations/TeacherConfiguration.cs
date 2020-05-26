using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entities;

namespace Models.EntityConfigurations
{
    class TeacherConfiguration : IEntityTypeConfiguration<Teacher>
    {
        public void Configure(EntityTypeBuilder<Teacher> builder)
        {
            
                builder.Property(e => e.Id).HasColumnName("ID");

                builder.Property(e => e.DateOfEntry).HasColumnType("date");

                builder.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50);

                builder.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                builder.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50);

                builder.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(50);
           
        }
    }
}
