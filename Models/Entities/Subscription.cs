using System;
using System.Collections.Generic;
using Models.EntityInterfaces;

namespace Models.Entities
{
    public  class Subscription : ISubscription
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public float Amount { get; set; }
        public int AdminId { get; set; }

        public virtual Admin Admin { get; set; }
    }
}
