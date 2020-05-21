using System;
using System.ComponentModel.DataAnnotations;

namespace Models.Interfaces
{
    interface IAdmin
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime DOB { get; set; }
        [Required][DataType(DataType.Date)]
        public DateTime Signup { get; set; }
        [Required]
        public ICreditCard CreditCard { get; set; }
        [Required]
        public ISubcription Subscription { get; set; }


    }
}
