using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;

namespace Models.Core.Repositories
{
   public class RoomRepository : Repository<Room>, IRoomRepository
    {
        public RoomRepository(DbContext context) : base(context)
        {
        }
    }
}
