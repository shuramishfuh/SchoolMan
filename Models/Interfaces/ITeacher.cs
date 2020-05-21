using System;
using System.ComponentModel;
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
        [Required][DefaultValue("password")]
        public string Password { get; set; }
        [Required]
        public ICourses Courses { get; set; }
        [Required][EmailAddress]
        public string Email { get; set; }
        [Required][DataType(DataType.Date)]
        public DateTime DateOfEntry { get; set; }

    }
}
