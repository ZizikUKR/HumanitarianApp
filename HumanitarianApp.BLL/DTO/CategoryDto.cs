using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.BLL.DTO
{
    public class CategoryDto
    {
        public VolunteerCategory? VolunteerCategory { get; set; }
        public EnterpriseCategory? EnterpriseCategory { get; set; }
        public NoticeCategory? NoticeCategory { get; set; }
        public Guid EntityId { get; set; }
    }
}
