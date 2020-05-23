using Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace Models.Entities
{
    class Teacher : ITeacher
    {
        public int ID { get ; set ; }
        public string Name { get; set; }
        public string userName { get ; set ; }
        public string Password { get ; set ; }
        public Collection<ICourse> Courses { get ; set ; }
        public string Email { get ; set ; }
        public DateTime DateOfEntry { get ; set ; }
    }
}
