using Microsoft.EntityFrameworkCore;
using Models.builderConfigurations;
using Models.Entities;
using Models.EntityConfigurations;

namespace Models.DataAccess.DataContext
{
public  class SchoolAppContext : DbContext
    {
        public SchoolAppContext()
        {
        }

        public SchoolAppContext(DbContextOptions<SchoolAppContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Accomodation> Accomodation { get; set; }
        public virtual DbSet<Event> Events { get; set; }
        public virtual DbSet<Admin> Admin { get; set; }
        public virtual DbSet<Class> Class { get; set; }
        public virtual DbSet<ClubAndSociety> ClubAndSociety { get; set; }
        public virtual DbSet<Course> Course { get; set; }
        public virtual DbSet<CreditCard> CreditCard { get; set; }
        public virtual DbSet<Grade> Grade { get; set; }
        public virtual DbSet<Room> Room { get; set; }
        public virtual DbSet<Student> Student { get; set; }
        public virtual DbSet<Subscription> Subscription { get; set; }
        public virtual DbSet<Teacher> Teacher { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Manangement;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.ApplyConfiguration(new AccomodationConfiguration());
            modelBuilder.ApplyConfiguration(new EventConfiguration());
            modelBuilder.ApplyConfiguration(new AdminConfiguration());
            modelBuilder.ApplyConfiguration(new ClassConfiguration());
            modelBuilder.ApplyConfiguration(new ClubAndSocietyConfiguration());
            modelBuilder.ApplyConfiguration(new CourseConfiguration());
            modelBuilder.ApplyConfiguration(new CreditCardConfiguration());
            modelBuilder.ApplyConfiguration(new GradeConfiguration());
            modelBuilder.ApplyConfiguration(new RoomConfiguration());
            modelBuilder.ApplyConfiguration(new StudentConfiguration());
            modelBuilder.ApplyConfiguration(new SubscriptionConfiguration());
            modelBuilder.ApplyConfiguration(new TeacherConfiguration());
       
        }

        
    }
}
