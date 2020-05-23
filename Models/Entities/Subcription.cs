using Models.Interfaces;
using System;

namespace Models.Entities
{
    class Subcription : ISubcription
    {
        public string type { get; set ; }
        public DateTime StartDate { get; set; }
        public DateTime ExpireDate { get ; set ; }
        public float Amount { get ; set ; }
    }
}
