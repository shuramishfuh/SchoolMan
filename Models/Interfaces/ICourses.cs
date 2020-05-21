using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface ICourses
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string CourseName { get; set; }
        [Required]
        public string grade { get; set; }
        [Required]
        public bool Optional { get; set; }
    }
}
