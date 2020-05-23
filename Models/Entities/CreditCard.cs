using Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Entities
{
    class CreditCard : ICreditCard
    {
        public int CreditCardNumber { get ; set; }
        public DateTime ExpireDate { get; set ; }
        public int SecurityCode { get ; set ; }
    }
}
