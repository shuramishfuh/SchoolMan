using Microsoft.EntityFrameworkCore;
using Models.Core.Interfaces;
using Models.Entities;

namespace Models.Core.Repositories
{
   public class CreditCardRepository : Repository<CreditCard>, ICreditCardRepository
    {
        public CreditCardRepository(DbContext context) : base(context)
        {
        }
    }
}
