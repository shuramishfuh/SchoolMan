using System;
using System.Collections.Generic;
using Models.EntityInterfaces;

namespace Models.Entities
{
    public class Teacher : ITeacher
    {
        public Teacher()
        {
            Course = new HashSet<Course>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public DateTime DateOfEntry { get; set; }

        public virtual ICollection<Course> Course { get; set; }
    }
}