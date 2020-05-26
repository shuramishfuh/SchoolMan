using System;
using Models.Entities;

namespace Models.EntityInterfaces
{
    public interface ISubscription
    {
        int Id { get; set; }
        string Type { get; set; }
        DateTime StartDate { get; set; }
        DateTime ExpireDate { get; set; }
        float Amount { get; set; }
        int AdminId { get; set; }
        Admin Admin { get; set; }
    }
}