using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Interfaces
{
    public interface IEventRepository : IRepository<Event>
    {
        /// <summary>
        /// updates an event 
        /// </summary>
        /// <param name="event">event</param>
        void UpdateEvent(IEvent @event);
    }
}
