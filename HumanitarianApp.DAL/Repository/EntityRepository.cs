using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HumanitarianApp.DAL.Repository
{
    public class EntityRepository : BaseRepository<Entity>, IEntityRepository
    {
        private readonly HumanitarianDbContext _dbContext;

        public EntityRepository(HumanitarianDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public Entity GetByName(string name)
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.Name == name);
        }

        public Entity GetByPhoneNumber(string phoneNumber)
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.PhoneNumber == phoneNumber);
        }

        public Entity GetByEmail(string email)
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.Email == email);
        }

        public Entity GetByAddress(string address)
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.Address == address);
        }

    }
}
