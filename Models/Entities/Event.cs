using Models.Interfaces;

namespace Models.Entities
{
    class Event : IEvents
    {
        public int ID { get ; set; }
        public string Type { get ; set ; }
        public string Description { get ; set ; }
    }
}
