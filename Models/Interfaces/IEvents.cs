using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface IEvents
    {
        public int ID { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
