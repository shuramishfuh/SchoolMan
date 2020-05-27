using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Repositories
{
   public class StudentRepository: Repository<Student>, IStudentRepository
    {
        public StudentRepository(DbContext context) : base(context)
        {
        }

        public void UpdateStudent(IStudent student)
        {
            throw new System.NotImplementedException();
        }
    }
}
