using HumanitarianApp.BLL.DTO;

namespace HumanitarianApp.BLL.Services
{
    public interface IOrganizationService
    {
        Task AddOrganization(OrganizationDto entity);
        Task<IEnumerable<OrganizationDto>> GetAllActiveOrganizations(int pageNumber);
        Task<IEnumerable<OrganizationDto>> GetAllUnActiveOrganizations(int pageNumber);
        Task<OrganizationDto> GetById(Guid id);
        public Task UpdateOrganization(UpdateOrganizationDto entity);
        public Task DeleteOrganization(Guid id);
    }
}
