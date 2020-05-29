using System;

namespace Models.Core.Interfaces
{ // register all repositories to unit of work 
   public interface IUnitOfWork :IDisposable
    {
        IAccommodationRepository Accommodations { get; }
        IAdminRepository Admins { get; }
        IClassRepository Classes { get; }
        IClubAndSocietiesRepository ClubAndSocieties { get; }
        ICreditCardRepository CreditCards { get; }
        IGradeRepository Grades { get; }
        IRoomRepository Rooms { get; }
        IStudentRepository Students { get; }
        ISubscriptionRepository Subscriptions { get; }
        ITeacherRepository Teacher { get; }
        ICourseRepository Courses { get; }
        IEventRepository Events { get; }
        int Complete();
    }
}
