using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;

namespace Models.Core.Repositories
{
   public class StudentRepository: Repository<Student>, IStudentRepository
    {
        public StudentRepository(DbContext context) : base(context)
        {
        }
    }
}
