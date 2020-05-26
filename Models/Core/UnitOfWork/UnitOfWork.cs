using Models.Core.Interfaces;
using Models.Core.Repositories;
using Models.DataAccess.DataContext;

namespace Models.Core.UnitOfWork
{
    internal class UnitOfWork : IUnitOfWork
    {
        private readonly SchoolAppContext _context;

        /// <summary>
        ///     calls unit of work and passes same dbcontext to all repositories like singleton
        /// </summary>
        /// <param name="context"> database context</param>
        public UnitOfWork(SchoolAppContext context)
        {
            _context = context;
            Courses = new CourseRepository(_context);
        }

        public ICourseRepository Courses { get; }
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