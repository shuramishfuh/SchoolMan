using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entities;

namespace Models.EntityConfigurations
{
    internal class StudentConfiguration : IEntityTypeConfiguration<Student>
    {
        public void Configure(EntityTypeBuilder<Student> builder)
        {
            builder.Property(e => e.Id).HasColumnName("ID");

            builder.Property(e => e.Admitted).HasColumnType("date");

            builder.Property(e => e.ClassId).HasColumnName("ClassID");

            builder.Property(e => e.ClubAndSocietyId).HasColumnName("ClubAndSocietyID");

            builder.Property(e => e.Email)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(60);

            builder.Property(e => e.Password)
                .IsRequired()
                .HasColumnType("text");

            builder.Property(e => e.RoomId).HasColumnName("RoomID");

            builder.Property(e => e.UserName)
                .IsRequired()
                .HasMaxLength(50);

            builder.HasOne(d => d.Class)
                .WithMany(p => p.Student)
                .HasForeignKey(d => d.ClassId)
                .HasConstraintName("FK_Student_Class");

            builder.HasOne(d => d.ClubAndSociety)
                .WithMany(p => p.Student)
                .HasForeignKey(d => d.ClubAndSocietyId)
                .HasConstraintName("FK_Student_ClubAndSociety");

            builder.HasOne(d => d.Room)
                .WithMany(p => p.Student)
                .HasForeignKey(d => d.RoomId)
                .HasConstraintName("FK_Student_Room");
        }
    }
}