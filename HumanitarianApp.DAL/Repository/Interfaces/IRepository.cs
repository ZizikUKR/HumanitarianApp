using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.DAL.Repository
{
    public interface IRepository<TEntity>
    {
        void Create(TEntity entity);
        TEntity GetById(Guid id);
        IEnumerable<TEntity> GetAll();
        void Update(TEntity entity);
        void Delete(TEntity entity);
    }
}
