using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface IStudent
    {
        public int ID { get; set; }
        [Required]
        public string  Name { get; set; }
        [Required]
        public string  UserName { get; set; }
        [EmailAddress][DefaultValue("N/A")]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required][DataType(DataType.Date)]
        public DateTime Admitted { get; set; }
        [Required]
        public bool TuitionPaid { get; set; }
    }
}
