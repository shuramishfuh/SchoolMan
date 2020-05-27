using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Core.Repositories;
using Models.DataAccess.DataContext;
using Models.Entities;

namespace DAL.Repositories
{
   public class EventRepository : Repository<Event>, IEventRepository
    {
        public EventRepository(SchoolAppContext context) : base(context)
        {
        }
    }    

    


}
