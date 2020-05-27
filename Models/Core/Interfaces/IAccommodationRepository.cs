using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Interfaces
{
   public interface IAccommodationRepository : IRepository<Accomodation>
   {/// <summary>
   /// updates an accomodation by using the Id
   /// </summary>
   /// <param name="accomodation"> accomodation id</param>
       void UpdateAccomodation(IAccomodation accomodation);
   }
}
