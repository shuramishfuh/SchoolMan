using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Interfaces
{
   public interface IStudentRepository : IRepository<Student>
   {/// <summary>
   /// update student
   /// </summary>
   /// <param name="student"> student</param>
       void UpdateStudent(IStudent student);
   }
}
