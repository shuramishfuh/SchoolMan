using System.Collections.Generic;
using Models.EntityInterfaces;

namespace Models.Entities
{
    public class Class : IClass
    {
        public Class()
        {
            Student = new HashSet<Student>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public double Tuition { get; set; }

        public virtual ICollection<Student> Student { get; set; }
    }
}