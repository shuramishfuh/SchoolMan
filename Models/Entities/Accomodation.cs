using Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Entities
{
    class Accomodation : IAccomodation
    {
        public int ID { get;  set; }
        public string Name { get; set; }
        public DateTime Year { get; set ; }
        public float Amount { get; set ; }
        public string RoomNumber { get; set; }
        public IOccupancyType Occupancy { get; set; }
    }
}
