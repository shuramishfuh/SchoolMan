using System;
using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface ICreditCard
    {
        int Id { get; set; }
        string CreditCardNumber { get; set; }
        DateTime ExpiryDate { get; set; }
        byte SecurityCode { get; set; }
        int AdminId { get; set; }
        Admin Admin { get; set; }
    }
}