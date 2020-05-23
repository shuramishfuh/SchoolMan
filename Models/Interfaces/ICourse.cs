using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface ICourse
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
