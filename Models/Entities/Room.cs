using System;
using System.Collections.Generic;
using Models.EntityInterfaces;

namespace Models.Entities
{
    public  class Room : IRoom
    {
        public Room()
        {
            Student = new HashSet<Student>();
        }

        public int Id { get; set; }
        public string RoomNumber { get; set; }
        public byte NumberAllowed { get; set; }
        public byte NumberInRoom { get; set; }
        public float Amount { get; set; }
        public int AccomodationId { get; set; }

        public virtual Accomodation Accomodation { get; set; }
        public virtual ICollection<Student> Student { get; set; }
    }
}
