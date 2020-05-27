using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Repositories
{
   public class AdminRepository : Repository<Admin>, IAdminRepository
    {
        public AdminRepository(DbContext context) : base(context)
        {
        }

        public void UpdateAdmin(IAdmin admin)
        {
            throw new System.NotImplementedException();
        }
    }
}
