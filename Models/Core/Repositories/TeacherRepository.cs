using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;

namespace Models.Core.Repositories
{
 public   class TeacherRepository : Repository<Teacher>, ITeacherRepository
    {
        public TeacherRepository(DbContext context) : base(context)
        {
        }
    }
}
