using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HumanitarianApp.DAL.Repository
{
    public class EntityRepository : IEntityRepository
    {
        private readonly HumanitarianDbContext _dbContext;

        public EntityRepository(HumanitarianDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void Create(Entity entity)
        {
            _dbContext.Add(entity);
            _dbContext.SaveChanges();
        }

        public Entity GetById(Guid id)
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.EntityId == id);
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

        public IEnumerable<Entity> GetAll()
        {
            return _dbContext.Set<Entity>().ToList();
        }

        public void Update(Entity entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            _dbContext.SaveChanges();
        }

        public void Delete(Entity entity)
        {
            _dbContext.Remove(entity);
            _dbContext.SaveChanges();
        }
    }
}
