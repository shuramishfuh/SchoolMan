using System;
using Models.EntityInterfaces;

namespace Models.Entities
{
    public class CreditCard : ICreditCard
    {
        public int Id { get; set; }
        public string CreditCardNumber { get; set; }
        public DateTime ExpiryDate { get; set; }
        public byte SecurityCode { get; set; }
        public int AdminId { get; set; }

        public virtual Admin Admin { get; set; }
    }
}