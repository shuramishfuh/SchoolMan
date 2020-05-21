using System;
using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface ICreditCard
    {
        [Key]
        [CreditCard]
        public int CreditCardNumber { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime ExpireDate { get; set; }
        [Required]
        [MaxLength(3)]
        public int SecurityCode { get; set; }

    }
}
