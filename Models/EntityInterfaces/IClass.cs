using System.Collections.Generic;
using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface IClass
    {
        int Id { get; set; }
        string Name { get; set; }
        double Tuition { get; set; }
        ICollection<Student> Student { get; set; }
    }
}