using HumanitarianApp.BLL.DTO;

namespace HumanitarianApp.BLL.Services
{
    public interface IAnnouncementService
    {
        Task AddAnnouncement(AnnouncementDto entity);
        Task<IEnumerable<AnnouncementDto>> GetAllActiveAnnouncements(int pageNumber);
        Task<IEnumerable<AnnouncementDto>> GetAllUnActiveAnnouncements(int pageNumber);
        Task<AnnouncementDto> GetById(Guid id);
        public Task UpdateAnnouncement(UpdateAnnouncementDto entity);
        public Task DeleteAnnouncement(Guid id);
    }
}
