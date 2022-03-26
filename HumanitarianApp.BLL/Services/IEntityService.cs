using HumanitarianApp.BLL.DTO;
using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.BLL.Services
{
    public interface IEntityService
    {
        void AddEntity(EntityDto entity);
        IEnumerable<EntityDto> GetAllEntities();
        IEnumerable<EntityDto> GetAllEntitiesByType(byte type);
        EntityDto GetById(Guid id);
        EntityDto GetByName(string name);
        EntityDto GetByEmail(string email);
        EntityDto GetByAddress(string address);
        public void UpdateEntity(EntityDto entity);
        public void DeleteEntity(EntityDto entity);
    }
}
