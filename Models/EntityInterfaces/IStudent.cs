using System;
using System.Collections.Generic;
using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface IStudent
    {
        int Id { get; set; }
        string Name { get; set; }
        string UserName { get; set; }
        string Email { get; set; }
        string Password { get; set; }
        DateTime Admitted { get; set; }
        bool TuitionPaid { get; set; }
        int? RoomId { get; set; }
        int? ClubAndSocietyId { get; set; }
        int ClassId { get; set; }
        Class Class { get; set; }
        ClubAndSociety ClubAndSociety { get; set; }
        Room Room { get; set; }
        ICollection<Grade> Grade { get; set; }
    }
}