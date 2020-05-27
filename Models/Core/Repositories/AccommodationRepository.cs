using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Repositories
{
  public  class AccommodationRepository :Repository<Accomodation>, IAccommodationRepository
    {
        public AccommodationRepository(DbContext context) : base(context)
        {
        }

        public void UpdateAccomodation(IAccomodation accomodation)
        {
            throw new System.NotImplementedException();
        }
    }
}
