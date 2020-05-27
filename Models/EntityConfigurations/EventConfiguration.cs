using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Models.Entities;

namespace Models.EntityConfigurations 
{
   internal class EventConfiguration : IEntityTypeConfiguration<Event>
    {
        
        public void Configure(EntityTypeBuilder<Event> builder)
        {
            builder.Property(e => e.Id).HasColumnName("ID");

            builder.Property(e => e.Description).IsRequired();

            builder.Property(e => e.Date).
                HasColumnType("date")
                .IsRequired()
                .HasDefaultValueSql("GetDate()");

            builder.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.Type)
                .IsRequired()
                .HasConversion<string>();
        }
    }
}
