using System;
using System.Collections.Generic;
using Models.EntityInterfaces;

namespace Models.Entities
{ // default password is password
    public class Student : IStudent
    {
        public Student()
        {
            Grade = new HashSet<Grade>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime Admitted { get; set; }
        public bool TuitionPaid { get; set; }
        public int? RoomId { get; set; }
        public int? ClubAndSocietyId { get; set; }
        public int ClassId { get; set; }

        public virtual Class Class { get; set; }
        public virtual ClubAndSociety ClubAndSociety { get; set; }
        public virtual Room Room { get; set; }
        public virtual ICollection<Grade> Grade { get; set; }
    }
}