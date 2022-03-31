using AutoMapper;
using HumanitarianApp.BLL.DTO;
using HumanitarianApp.DAL.Models;
using HumanitarianApp.DAL.Repository;

namespace HumanitarianApp.BLL.Services
{
    public class OrganizationService : IOrganizationService
    {
        private readonly IOrganizationRepository _organizationRepository;
        private readonly IMapper _mapper;
        public OrganizationService(IOrganizationRepository organizationRepository, IMapper mapper)
        {
            _organizationRepository = organizationRepository;
            _mapper = mapper;
        }
        public async Task AddOrganization(OrganizationDto entity)
        {
            var entityForCreate = _mapper.Map<Organization>(entity);
            entityForCreate.CreationDate = DateTime.Now;

            if (entityForCreate == null)
            {
                throw new Exception("Entity doesn't map");
            }

            await _organizationRepository.Create(entityForCreate);
        }

        public async Task<IEnumerable<OrganizationDto>> GetAllOrganizations()
        {
            var organizationsDto = new List<OrganizationDto>();
            var organizations = await _organizationRepository.GetAll();

            foreach (var organization in organizations)
            {
                var organizationDto = _mapper.Map<OrganizationDto>(organization);
                organizationsDto.Add(organizationDto);
            }

            return organizationsDto;
        }

        public async Task<OrganizationDto> GetById(Guid id)
        {

            var entity = await _organizationRepository.GetById(id);

            if (entity == null)
            {
                throw new Exception("Entity doesn't  found");
            }
            var organizationDto = _mapper.Map<OrganizationDto>(entity);

            return organizationDto;
        }

        public async Task UpdateOrganization(UpdateOrganizationDto entityDto)
        {
            var organization = await _organizationRepository.GetById(entityDto.Id);

            if (organization == null)
            {
                throw new Exception("Entity doesn't exist");
            }
            organization.Email = entityDto.Email;
            organization.PhoneNumber = entityDto.PhoneNumber;
            organization.Name = entityDto.Name;
            organization.City = entityDto.City;
            organization.Address = entityDto.Address;
            organization.Description = entityDto.Description;

            await _organizationRepository.Update(organization);
        }

        public async Task DeleteOrganization(Guid id)
        {
            var entity = await _organizationRepository.GetById(id);

            if (entity == null)
            {
                throw new Exception("Entity was deleted already");
            }
            await _organizationRepository.Delete(entity);
        }
    }
}
