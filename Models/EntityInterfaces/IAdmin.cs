using System;
using System.Collections.Generic;
using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface IAdmin
    {
        int Id { get; set; }
        string Name { get; set; }
        string UserName { get; set; }
        string Email { get; set; }
        string Password { get; set; }
        DateTime Dob { get; set; }
        DateTime SignUp { get; set; }
        Subscription Subscription { get; set; }
        ICollection<CreditCard> CreditCard { get; set; }
    }
}