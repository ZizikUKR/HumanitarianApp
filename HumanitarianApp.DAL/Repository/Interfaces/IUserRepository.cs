using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.DAL.Repository.Interfaces
{
    public interface IUserRepository 
    {
        Task AddRefreshToken(User user);
        Task<User> GetById(string id);
    }
}
