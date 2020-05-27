using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Repositories
{
   public class GradeRepository : Repository<Grade>, IGradeRepository
    {
        public GradeRepository(DbContext context) : base(context)
        {
        }

        public void UpdateGrade(IGrade grade)
        {
            throw new System.NotImplementedException();
        }
    }
}
