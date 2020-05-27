using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Interfaces
{
  public  interface ITeacherRepository : IRepository<Teacher>
    { 
        
     /// <summary>
    /// update teacher
    /// </summary>
    /// <param name="teacher">Teacher</param>
        void UpdateTeacher(ITeacher teacher);
    }
}
