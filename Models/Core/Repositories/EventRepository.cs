using Models.Core.Interfaces;
using Models.DataAccess.DataContext;
using Models.Entities;

namespace Models.Core.Repositories
{
   public class EventRepository : Repository<Event>, IEventRepository
    {
        public EventRepository(SchoolAppContext context) : base(context)
        {
        }
    }    

    


}
