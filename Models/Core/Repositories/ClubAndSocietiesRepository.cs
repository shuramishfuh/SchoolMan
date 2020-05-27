using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Repositories
{
  public  class ClubAndSocietiesRepository: Repository<ClubAndSociety>,IClubAndSocietiesRepository
    {
        public ClubAndSocietiesRepository(DbContext context) : base(context)
        {
        }

        public void Update(IClubAndSociety clubAndSociety)
        {
            throw new System.NotImplementedException();
        }
    }
}
