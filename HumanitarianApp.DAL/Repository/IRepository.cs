using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.DAL.Repository
{
    public interface IEntityRepository
    {
        void Create(Entity entity);
        Entity GetById(Guid id);
        Entity GetByName(string name);
        Entity GetByPhoneNumber(string phoneNumber);
        Entity GetByEmail(string email);
        Entity GetByAddress(string address);
        IEnumerable<Entity> GetAll();
        void Update(Entity entity);
        void Delete(Entity entity);
    }
}
