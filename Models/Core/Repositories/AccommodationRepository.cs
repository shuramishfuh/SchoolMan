using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;

namespace Models.Core.Repositories
{
  public  class AccommodationRepository :Repository<Accomodation>, IAccommodationRepository
    {
        public AccommodationRepository(DbContext context) : base(context)
        {
        }
    }
}
