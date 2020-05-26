using System;
using System.Collections.Generic;
using Models.EntityInterfaces;

namespace Models.Entities
{
    public  class Admin : IAdmin
    {
        public Admin()
        {
            CreditCard = new HashSet<CreditCard>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime Dob { get; set; }
        public DateTime SignUp { get; set; }

        public virtual Subscription Subscription { get; set; }
        public virtual ICollection<CreditCard> CreditCard { get; set; }
    }
}
