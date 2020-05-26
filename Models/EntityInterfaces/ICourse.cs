using System.Collections.Generic;
using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface ICourse
    {
        int Id { get; set; }
        string CourseName { get; set; }
        int TeacherId { get; set; }
        string Level { get; set; }
        Teacher Teacher { get; set; }
        ICollection<Grade> Grade { get; set; }
    }
}