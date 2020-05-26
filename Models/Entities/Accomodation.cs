using System.Collections.Generic;
using Models.EntityInterfaces;

namespace Models.Entities
{
    public  class Accomodation : IAccomodation
    {
        public Accomodation()
        {
            Room = new HashSet<Room>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Room> Room { get; set; }
    }
}
