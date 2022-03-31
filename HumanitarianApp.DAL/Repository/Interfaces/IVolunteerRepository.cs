using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.DAL.Repository
{
    public interface IVolunteerRepository : IRepository<Volunteer>
    {
        Task<Volunteer> GetByName(string name);
        Task<Volunteer> GetByPhoneNumber(string phoneNumber);
        Task<Volunteer> GetByEmail(string email);
        Task<Volunteer> GetByAddress(string address);
    }
}
