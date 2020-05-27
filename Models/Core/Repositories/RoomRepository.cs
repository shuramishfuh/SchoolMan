using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Repositories
{
   public class RoomRepository : Repository<Room>, IRoomRepository
    {
        public RoomRepository(DbContext context) : base(context)
        {
        }

        public void UpdateRoom(IRoom room)
        {
            throw new System.NotImplementedException();
        }
    }
}
