using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entities;

namespace Models.EntityConfigurations
{
    internal class RoomConfiguration : IEntityTypeConfiguration<Room>
    {
        public void Configure(EntityTypeBuilder<Room> builder)
        {
            builder.Property(e => e.Id).HasColumnName("ID");

            builder.Property(e => e.AccomodationId).HasColumnName("AccomodationID");

            builder.Property(e => e.RoomNumber)
                .IsRequired()
                .HasMaxLength(50);

            builder.HasOne(d => d.Accomodation)
                .WithMany(p => p.Room)
                .HasForeignKey(d => d.AccomodationId)
                .HasConstraintName("Room_accomodation");
        }
    }
}