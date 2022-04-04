using HumanitarianApp.BLL.DTO;

namespace HumanitarianApp.BLL.Services
{
    public interface IVolunteerService
    {
        Task AddEntity(CreateVolunteerDto entity);
        Task<IEnumerable<VolunteerDto>> GetAll(int pageNumber);
        Task<VolunteerDto> GetById(Guid id);
        Task<VolunteerDto> GetByName(string name);
        Task<VolunteerDto> GetByEmail(string email);
        Task<VolunteerDto> GetByAddress(string address);
        public Task UpdateEntity(VolunteerDto entity);
        public Task DeleteEntity(Guid id);
    }
}
