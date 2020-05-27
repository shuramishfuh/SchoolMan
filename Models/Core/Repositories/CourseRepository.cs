using System.Collections.Generic;
using Models.Core.Interfaces;
using Models.DataAccess.DataContext;
using Models.Entities;

namespace Models.Core.Repositories
{
   public class CourseRepository :Repository<Course>, ICourseRepository
    {
        public CourseRepository(SchoolAppContext context) : base(context)
        {
        }

        public SchoolAppContext SchoolAppContext
        {
            get { return Context as SchoolAppContext; }
        }

        public IEnumerable<Course> GetHigestPerformingCoursesPerClass(string className)
        {
            throw new System.NotImplementedException();
        }
    }
    
}
