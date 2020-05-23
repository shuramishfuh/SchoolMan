using Models.Interfaces;
using System;

namespace Models.Entities
{
    class Student : IStudent
    {
        public int ID { get; set; }
        public string Name { get ; set ; }
        public string UserName { get ; set ; }
        public string Email { get; set ; }
        public string Password { get ; set ; }
        public DateTime Admitted { get ; set ; }
        public bool TuitionPaid { get ; set; }
    }
}
