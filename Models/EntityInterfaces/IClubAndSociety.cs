using System.Collections.Generic;
using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface IClubAndSociety
    {
        int Id { get; set; }
        string Name { get; set; }
        ICollection<Student> Student { get; set; }
    }
}