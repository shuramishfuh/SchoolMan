using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface IGrade
    {
        int Id { get; set; }
        string LetterGrade { get; set; }
        double NumericGrade { get; set; }
        int CourseId { get; set; }
        int StudentId { get; set; }
        Course Course { get; set; }
        Student Student { get; set; }
    }
}