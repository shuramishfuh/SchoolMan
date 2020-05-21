using System;
using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface ISubcription
    {
        [Key]
        [Required]
        public string type { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime StartDate { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime ExpireDate { get; set; }
        [Required]
        public float Amount { get; set; }

    }
}
