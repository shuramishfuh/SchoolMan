using Models.Entities;
using Models.EntityInterfaces;

namespace Models.Core.Interfaces
{
  public  interface IGradeRepository : IRepository<Grade>
  {/// <summary>
  /// update grade
  /// </summary>
  /// <param name="grade">Grade</param>
      void UpdateGrade(IGrade grade);
  }
}
