using System;
using System.Collections.Generic;
using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface ITeacher
    {
        int Id { get; set; }
        string Name { get; set; }
        string UserName { get; set; }
        string Password { get; set; }
        string Email { get; set; }
        DateTime DateOfEntry { get; set; }
        ICollection<Course> Course { get; set; }
    }
}