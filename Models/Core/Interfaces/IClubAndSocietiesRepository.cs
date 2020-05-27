using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Interfaces
{
   public interface IClubAndSocietiesRepository : IRepository<ClubAndSociety>
   {
       void Update(IClubAndSociety clubAndSociety);
   }
}
