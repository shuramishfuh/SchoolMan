using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;

namespace Models.Core.Repositories
{
   public class SubscriptionRepository :Repository<Subscription>, ISubscriptionRepository
    {
        public SubscriptionRepository(DbContext context) : base(context)
        {
        }
    }
}
