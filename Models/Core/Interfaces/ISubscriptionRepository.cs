using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Interfaces
{
  public  interface ISubscriptionRepository : IRepository<Subscription>
  {/// <summary>
  /// update subscription
  /// </summary>
  /// <param name="subscription">subscription</param>
      void UpdateSubscription(ISubscription subscription);

      //int Pay();
  }
}
