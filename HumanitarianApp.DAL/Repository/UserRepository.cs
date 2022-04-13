using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;
using HumanitarianApp.DAL.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HumanitarianApp.DAL.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly HumanitarianDbContext _dbContext;

        public UserRepository(HumanitarianDbContext dbContext)
        {
            _dbContext = dbContext;

        }

       public async  Task AddRefreshToken(User user)
       {
           _dbContext.Entry(user).State = EntityState.Modified;
           await _dbContext.SaveChangesAsync();
       }

       public async Task<User> GetById(string id)
       {
           return await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == id);
       }
    }
}
