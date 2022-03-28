using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HumanitarianApp.DAL.Repository
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : class, BaseModel
    {
        private readonly HumanitarianDbContext _dbContext;

        public BaseRepository(HumanitarianDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Create(TEntity entity)
        {
            _dbContext.Add(entity);
            _dbContext.SaveChanges();
        }

        public TEntity GetById(Guid id)
        {
            return _dbContext.Set<TEntity>().FirstOrDefault(e => e.Id == id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _dbContext.Set<TEntity>().ToList();
        }

        public void Update(TEntity entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            _dbContext.SaveChanges();
        }

        public void Delete(TEntity entity)
        {
            _dbContext.Remove(entity);
            _dbContext.SaveChanges();
        }
    }
}
