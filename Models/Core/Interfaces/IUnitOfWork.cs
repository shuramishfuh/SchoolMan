using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Core.Interfaces
{
   public interface IUnitOfWork :IDisposable
    {
        ICourseRepository Courses { get; }
        IEventRepository Events { get; }
        int Complete();
    }
}
