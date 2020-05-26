using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entities;

namespace Models.EntityConfigurations
{
    internal class GradeConfiguration : IEntityTypeConfiguration<Grade>
    {
        public void Configure(EntityTypeBuilder<Grade> builder)
        {
            builder.Property(e => e.Id).HasColumnName("ID");

            builder.Property(e => e.CourseId).HasColumnName("CourseID");

            builder.Property(e => e.LetterGrade)
                .IsRequired()
                .HasMaxLength(1);

            builder.Property(e => e.StudentId).HasColumnName("StudentID");

            builder.HasOne(d => d.Course)
                .WithMany(p => p.Grade)
                .HasForeignKey(d => d.CourseId)
                .HasConstraintName("FK_Grade_Course");

            builder.HasOne(d => d.Student)
                .WithMany(p => p.Grade)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("FK_Grade_Student");
        }
    }
}