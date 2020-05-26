using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entities;

namespace Models.EntityConfigurations
{
    class SubscriptionConfiguration : IEntityTypeConfiguration<Subscription>
    {
        public void Configure(EntityTypeBuilder<Subscription> builder)
        {
           
                builder.HasIndex(e => e.AdminId)
                    .HasName("admin_sub")
                    .IsUnique();

                builder.Property(e => e.Id).HasColumnName("ID");

                builder.Property(e => e.AdminId).HasColumnName("Admin_ID");

                builder.Property(e => e.ExpireDate).HasColumnType("date");

                builder.Property(e => e.StartDate).HasColumnType("date");

                builder.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(16);

                builder.HasOne(d => d.Admin)
                    .WithOne(p => p.Subscription)
                    .HasForeignKey<Subscription>(d => d.AdminId)
                    .HasConstraintName("FK__Subscript__Admin__01142BA1");
            
        }
    }
}
