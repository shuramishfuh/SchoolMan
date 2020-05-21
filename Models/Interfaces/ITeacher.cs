using System;
using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface ITeacher
    {
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string userName { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Course { get; set; }
        [Required][EmailAddress]
        public string Email { get; set; }
        [Required][DataType(DataType.Date)]
        public DateTime DateOfEntry { get; set; }

    }
}
