using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Interfaces
{
   public interface IAdminRepository : IRepository<Admin>
   {/// <summary>
   /// update admin
   /// </summary>
   /// <param name="admin"> pass admin to add</param>
       void UpdateAdmin(IAdmin admin);

   }
}
