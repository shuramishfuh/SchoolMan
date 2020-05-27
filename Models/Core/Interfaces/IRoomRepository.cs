using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Interfaces
{
  public  interface IRoomRepository :IRepository<Room>
  {
      /// <summary>
      /// Update Room
      /// </summary>
      /// <param name="room">Room</param>
      void UpdateRoom(IRoom room);
  }
}
