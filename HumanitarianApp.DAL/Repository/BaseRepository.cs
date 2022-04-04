using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HumanitarianApp.DAL.Repository
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : BaseModel
    {
        private readonly HumanitarianDbContext _dbContext;

        public BaseRepository(HumanitarianDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task Create(TEntity entity)
        {
            _dbContext.Add(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<TEntity> GetById(Guid id)
        {
            return await _dbContext.Set<TEntity>().FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task<IEnumerable<TEntity>> GetAll(int pageNumber)
        {
            return await _dbContext.Set<TEntity>()
                .Skip((pageNumber - 1) * 10)
                .Take(10)
                .ToListAsync();
        }

        public async Task Update(TEntity entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task Delete(TEntity entity)
        {
            _dbContext.Remove(entity);
            await _dbContext.SaveChangesAsync();
        }
    }
}
