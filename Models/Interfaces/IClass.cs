using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface IClass
    {
        public int ID { get; set; }
        [Required]
        public string ClassName { get; set; }
        public Collection<ICourse> Courses { get; set; }
        [Required]
        public float Tuition { get; set; }
    }
}
