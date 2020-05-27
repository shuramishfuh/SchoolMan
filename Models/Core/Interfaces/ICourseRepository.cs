using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Interfaces
{
    public interface ICourseRepository : IRepository<Course>
    {/// <summary>
    /// Updates course
    /// </summary>
    /// <param name="course">course</param>
        void UpdateCourse(ICourse course);
        
    }
}
