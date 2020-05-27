using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Repositories
{
 public   class TeacherRepository : Repository<Teacher>, ITeacherRepository
    {
        public TeacherRepository(DbContext context) : base(context)
        {}

        public void UpdateTeacher(ITeacher teacher)
        {
            throw new System.NotImplementedException();
        }
    }
}
