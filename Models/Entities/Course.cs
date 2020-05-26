using System.Collections.Generic;
using Models.EntityInterfaces;

namespace Models.Entities
{
    public class Course : ICourse
    {
        public Course()
        {
            Grade = new HashSet<Grade>();
        }

        public int Id { get; set; }
        public string CourseName { get; set; }
        public int TeacherId { get; set; }
        public string Level { get; set; }

        public virtual Teacher Teacher { get; set; }
        public virtual ICollection<Grade> Grade { get; set; }
    }
}