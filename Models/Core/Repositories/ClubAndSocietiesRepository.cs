using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;

namespace Models.Core.Repositories
{
  public  class ClubAndSocietiesRepository: Repository<ClubAndSociety>,IClubAndSocietiesRepository
    {
        public ClubAndSocietiesRepository(DbContext context) : base(context)
        {
        }
    }
}
