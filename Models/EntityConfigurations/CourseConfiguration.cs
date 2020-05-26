using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entities;

namespace Models.EntityConfigurations
{
    class CourseConfiguration :IEntityTypeConfiguration<Course>
    {
        public void Configure(EntityTypeBuilder<Course> builder)
        {
            
                builder.Property(e => e.Id).HasColumnName("ID");

                builder.Property(e => e.CourseName)
                    .IsRequired()
                    .HasMaxLength(50);

                builder.Property(e => e.Level)
                    .IsRequired()
                    .HasMaxLength(10);

                builder.Property(e => e.TeacherId).HasColumnName("TeacherID");

                builder.HasOne(d => d.Teacher)
                    .WithMany(p => p.Course)
                    .HasForeignKey(d => d.TeacherId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Course_Teacher");
           
        }
    }
}
