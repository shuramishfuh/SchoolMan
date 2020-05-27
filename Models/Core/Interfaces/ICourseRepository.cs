using System.Collections.Generic;
using Models.Entities;

namespace Models.Core.Interfaces
{
    public interface ICourseRepository : IRepository<Course>
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="className"> get top performing course per class</param>
        /// <returns></returns>
        IEnumerable<Course> GetHigestPerformingCoursesPerClass(string className);
    }
}
