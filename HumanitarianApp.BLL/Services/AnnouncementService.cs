using AutoMapper;
using HumanitarianApp.BLL.DTO;
using HumanitarianApp.DAL.Models;
using HumanitarianApp.DAL.Models.Enums;
using HumanitarianApp.DAL.Repository;

namespace HumanitarianApp.BLL.Services
{
    public class AnnouncementService : IAnnouncementService
    {
        private readonly IAnnouncementRepository _announcementRepository;
        private readonly IMapper _mapper;
        public AnnouncementService(IAnnouncementRepository announcementRepository, IMapper mapper)
        {
            _announcementRepository = announcementRepository;
            _mapper = mapper;
        }


        public async Task AddAnnouncement(AnnouncementDto entity)
        {
            var entityForCreate = _mapper.Map<Announcement>(entity);
            entityForCreate.CreationDate = DateTime.Now;

            if (entityForCreate == null)
            {
                throw new Exception("Entity doesn't map");
            }

            await _announcementRepository.Create(entityForCreate);
        }

        public async Task<IEnumerable<AnnouncementDto>> GetAllActiveAnnouncements(int pageNumber)
        {
            var announcementsDto = new List<AnnouncementDto>();
            var announcements = await _announcementRepository.GetAllActiveRecord(pageNumber);

            foreach (var announcement in announcements)
            {
                var announcementDto = _mapper.Map<AnnouncementDto>(announcement);
                announcementsDto.Add(announcementDto);
            }

            return announcementsDto;
        }

        public async Task<IEnumerable<AnnouncementDto>> GetAllUnActiveAnnouncements(int pageNumber)
        {
            var announcementsDto = new List<AnnouncementDto>();
            var announcements = await _announcementRepository.GetAllUnActiveRecord(pageNumber);

            foreach (var announcement in announcements)
            {
                var announcementDto = _mapper.Map<AnnouncementDto>(announcement);
                announcementsDto.Add(announcementDto);
            }

            return announcementsDto;
        }

        public async Task<AnnouncementDto> GetById(Guid id)
        {
            var entity = await _announcementRepository.GetById(id);

            if (entity == null)
            {
                throw new Exception("Entity doesn't  found");
            }
            var organizationDto = _mapper.Map<AnnouncementDto>(entity);

            return organizationDto;
        }

        public async Task UpdateAnnouncement(UpdateAnnouncementDto entityDto)
        {
            var organization = await _announcementRepository.GetById(entityDto.Id);

            if (organization == null)
            {
                throw new Exception("Entity doesn't exist");
            }
            organization.Email = entityDto.Email;
            organization.PhoneNumber = entityDto.PhoneNumber;
            organization.Name = entityDto.Name;
            organization.IsActive = entityDto.IsActive;
            organization.City = entityDto.City;
            organization.Address = entityDto.Address;
            organization.Description = entityDto.Description;
            organization.Category = (AnnouncmentCategory)entityDto.Category;

            await _announcementRepository.Update(organization);
        }

        public async Task DeleteAnnouncement(Guid id)
        {
            var entity = await _announcementRepository.GetById(id);

            if (entity == null)
            {
                throw new Exception("Entity was deleted already");
            }
            await  _announcementRepository.Delete(entity);
        }
    }
}
