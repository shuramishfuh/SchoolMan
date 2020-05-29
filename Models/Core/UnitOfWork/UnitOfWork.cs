using Models.Core.Interfaces;
using Models.Core.Repositories;
using Models.DataAccess.DataContext;

namespace Models.Core.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly SchoolAppContext _context;



        /// <summary>
        ///     calls unit of work and passes same dbcontext to all repositories like singleton
        /// </summary>
        /// <param name="context"> database context</param>
        public UnitOfWork(SchoolAppContext context)
        {

            _context = context;
            // calling all repositories with dbcontext in unit of work
            Courses = new CourseRepository(_context);
            Events = new EventRepository(_context);
            Accommodations = new AccommodationRepository(_context);
            Admins = new AdminRepository(_context);
            Classes = new ClassRepository(_context);
            ClubAndSocieties = new ClubAndSocietiesRepository(_context);
            CreditCards = new CreditCardRepository(_context);
            Grades = new GradeRepository(_context);
            Rooms = new RoomRepository(_context);
            Students = new StudentRepository(_context);
            Subscriptions = new SubscriptionRepository(_context);
            Teacher = new TeacherRepository(_context);
        }

        public IAccommodationRepository Accommodations { get; }
        public IAdminRepository Admins { get; }
        public IClassRepository Classes { get; }
        public IClubAndSocietiesRepository ClubAndSocieties { get; }
        public ICreditCardRepository CreditCards { get; }
        public IGradeRepository Grades { get; }
        public IRoomRepository Rooms { get; }
        public IStudentRepository Students { get; }
        public ISubscriptionRepository Subscriptions { get; }
        public ITeacherRepository Teacher { get; }
        public ICourseRepository Courses { get; }

        public IEventRepository Events { get; }

        //complete unit of work by saving all changes to the database
        public int Complete()
        {
            return _context.SaveChanges();
        }
        // disposes the context
        public void Dispose()
        {
            _context.Dispose();
        }
    }

}