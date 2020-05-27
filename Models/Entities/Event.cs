using System;
using Models.EntityInterfaces;

namespace Models.Entities
{
   public class Event : IEvent
   {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public EventType Type { get; set; }
        public string Description { get; set; }
    }
    // types of events
   public enum EventType :byte
   {
       Competition,
       Internship,
       Scholarship,
       Jobs,
       Others
   }
}
