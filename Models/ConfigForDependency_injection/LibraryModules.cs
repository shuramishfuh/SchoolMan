using Autofac;
using Models.Core.Interfaces;
using Models.Core.UnitOfWork;
using Models.DataAccess.DataContext;
using Models.Entities;
using Models.EntityInterfaces;

namespace Models.ConfigForDependency_injection
{
   public class LibraryModules : Module
    {  /// <summary>
    ///  registers all entities and repositories as interfaces
    /// </summary>
    /// <param name="builder"> autofac containerBuilder</param>
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(t => t.Name.EndsWith("Repository"))
                .AsImplementedInterfaces();

            // register Context
            builder.RegisterType<SchoolAppContext>().AsSelf();
            // register all classes here
            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>();
            builder.RegisterType<Accomodation>().As<IAccomodation>();
            builder.RegisterType<Admin>().As<IAdmin>();
            builder.RegisterType<Class>().As<IClass>();
            builder.RegisterType<ClubAndSociety>().As<IClubAndSociety>();
            builder.RegisterType<Course>().As<ICourse>();
            builder.RegisterType<CreditCard>().As<ICreditCard>();
            builder.RegisterType<Event>().As<Event>();
            builder.RegisterType<Grade>().As<IGrade>();
            builder.RegisterType<Room>().As<IRoom>();
            builder.RegisterType<Student>().As<IStudent>();
            builder.RegisterType<Subscription>().As<ISubscription>();
            builder.RegisterType<Teacher>().As<ITeacher>();
        }
       
    }
}
