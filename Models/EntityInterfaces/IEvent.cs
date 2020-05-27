using System;
using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface IEvent
    {
        int Id { get; set; }
        string Name { get; set; }
        DateTime Date { get; set; }
        EventType Type { get; set; }
        string Description { get; set; }
    }
}