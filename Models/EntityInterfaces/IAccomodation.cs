using System.Collections.Generic;
using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface IAccomodation
    {
        int Id { get; set; }
        string Name { get; set; }
        ICollection<Room> Room { get; set; }
    }
}