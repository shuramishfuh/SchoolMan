using Models.Core.Interfaces;
using Models.DataAccess.DataContext;
using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Repositories
{
   public class EventRepository : Repository<Event>, IEventRepository
    {
        public EventRepository(SchoolAppContext context) : base(context)
        {
        }

        public void UpdateEvent(IEvent @event)
        {
            throw new System.NotImplementedException();
        }
    }    

    


}
