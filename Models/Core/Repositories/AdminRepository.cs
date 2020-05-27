using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;

namespace Models.Core.Repositories
{
   public class AdminRepository : Repository<Admin>, IAdminRepository
    {
        public AdminRepository(DbContext context) : base(context)
        {
        }
    }
}
