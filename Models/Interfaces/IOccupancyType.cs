using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface IOccupancyType
    {
        public int ID { get; set; }
        [Required]
        public int NumberInRoom { get; set; }
    }
}
