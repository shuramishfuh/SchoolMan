using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;

namespace Models.Core.Repositories
{
  public  class ClassRepository : Repository<Class>, IClassRepository
    {
        public ClassRepository(DbContext context) : base(context)
        {
        }
    }
}
