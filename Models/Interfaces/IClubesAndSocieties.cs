using System;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface IClubesAndSocieties
    {
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required] [DataType(DataType.Date)]
        public DateTime Year { get; set; }
    }

}
