using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Repositories
{
   public class SubscriptionRepository :Repository<Subscription>, ISubscriptionRepository
    {
        public SubscriptionRepository(DbContext context) : base(context)
        {
        }

        public void UpdateSubscription(ISubscription subscription)
        {
            throw new System.NotImplementedException();
        }
    }
}
