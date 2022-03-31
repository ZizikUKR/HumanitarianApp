namespace HumanitarianApp.DAL.Repository
{
    public interface IRepository<TEntity>
    {
        Task Create(TEntity entity);
        Task<TEntity> GetById(Guid id);
        Task<IEnumerable<TEntity>> GetAll();
        Task Update(TEntity entity);
        Task Delete(TEntity entity);
    }
}
