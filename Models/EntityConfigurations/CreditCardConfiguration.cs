using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entities;

namespace Models.EntityConfigurations
{
    internal class CreditCardConfiguration : IEntityTypeConfiguration<CreditCard>
    {
        public void Configure(EntityTypeBuilder<CreditCard> builder)
        {
            builder.Property(e => e.Id).HasColumnName("ID");

            builder.Property(e => e.AdminId).HasColumnName("Admin_ID");

            builder.Property(e => e.CreditCardNumber)
                .IsRequired()
                .HasMaxLength(20);

            builder.Property(e => e.ExpiryDate).HasColumnType("date");

            builder.HasOne(d => d.Admin)
                .WithMany(p => p.CreditCard)
                .HasForeignKey(d => d.AdminId)
                .HasConstraintName("FK_CreditCard_Admin");
        }
    }
}