using System;
using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface IAccomodation
    {
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required][DataType(DataType.Date)]
        public DateTime Year { get; set; }
        [Required]
        public float Amount { get; set; }
        [Required]
        public int RoomNumber { get; set; }
        [Required]
        public IOccupancyType Occupancy { get; set; }


    }
}
