using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Core.Interfaces
{
    interface IUnitOfWork :IDisposable
    {
        ICourseRepository Courses { get; }
        int Complete();
    }
}
