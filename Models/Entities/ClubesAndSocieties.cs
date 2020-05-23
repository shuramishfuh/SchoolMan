using Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Entities
{
    class ClubesAndSocieties : IClubAndSocietie
    {
        public int ID { get; set ; }
        public string Name { get; set; }
        public DateTime Year { get; set ; }
    }
}
