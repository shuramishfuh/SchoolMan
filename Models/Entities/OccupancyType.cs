using Models.Interfaces;

namespace Models.Entities
{
    class OccupancyType : IOccupancyType
    {
        public int ID { get; set; }
        public int NumberInRoom { get; set; }
    }
}
