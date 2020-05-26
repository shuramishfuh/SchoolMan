using System.Collections.Generic;
using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface IRoom
    {
        int Id { get; set; }
        string RoomNumber { get; set; }
        byte NumberAllowed { get; set; }
        byte NumberInRoom { get; set; }
        float Amount { get; set; }
        int AccomodationId { get; set; }
        Accomodation Accomodation { get; set; }
        ICollection<Student> Student { get; set; }
    }
}