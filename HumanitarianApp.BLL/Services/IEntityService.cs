using HumanitarianApp.BLL.DTO;

namespace HumanitarianApp.BLL.Services
{
    public interface IEntityService
    {
        Task AddEntity(CreateEntityDto entity);
        Task<IEnumerable<EntityDto>> GetAllEntities();
        Task<IEnumerable<EntityDto>> GetEntityByCity(string city);
        Task<IEnumerable<EntityDto>> GetAllEntitiesByType(byte type);
        Task<EntityDto> GetById(Guid id);
        Task<EntityDto> GetByName(string name);
        Task<EntityDto> GetByEmail(string email);
        Task<EntityDto> GetByAddress(string address);
        public Task UpdateEntity(EntityDto entity);
        public Task DeleteEntity(Guid id);
    }
}
