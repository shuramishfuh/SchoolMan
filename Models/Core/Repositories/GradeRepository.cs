using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;

namespace Models.Core.Repositories
{
   public class GradeRepository : Repository<Grade>, IGradeRepository
    {
        public GradeRepository(DbContext context) : base(context)
        {
        }
    }
}
