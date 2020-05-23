using Models.Interfaces;
using System.Collections.ObjectModel;

namespace Models.Entities
{
    class Class : IClass
    {
        public int ID { get; set; }
        public string ClassName { get; set; }
        public Collection<ICourse> Courses { get ; set ; }
        public float Tuition { get ; set; }
    }
}
