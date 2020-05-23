using Models.Interfaces;
using System;

namespace Models.Entities
{
    class Admin : IAdmin
    {
        public int ID { get; set ; }
        public string Name { get; set; }
        public string UserName { get; set ; }
        public string Email { get ; set; }
        public string Password { get ; set; }
        public DateTime DOB { get ; set; }
        public DateTime Signup { get ; set; }
        public ICreditCard CreditCard { get ; set ; }
        public ISubcription Subscription { get ; set ; }
    }
}
