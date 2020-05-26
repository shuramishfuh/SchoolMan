using System;
using System.Collections.Generic;
using Models.EntityInterfaces;

namespace Models.Entities
{
    public  class Grade : IGrade
    {
        public int Id { get; set; }
        public string LetterGrade { get; set; }
        public double NumericGrade { get; set; }
        public int CourseId { get; set; }
        public int StudentId { get; set; }

        public virtual Course Course { get; set; }
        public virtual Student Student { get; set; }
    }
}
