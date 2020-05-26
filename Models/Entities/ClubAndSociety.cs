using System.Collections.Generic;
using Models.EntityInterfaces;

namespace Models.Entities
{
    public class ClubAndSociety : IClubAndSociety
    {
        public ClubAndSociety()
        {
            Student = new HashSet<Student>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Student> Student { get; set; }
    }
}