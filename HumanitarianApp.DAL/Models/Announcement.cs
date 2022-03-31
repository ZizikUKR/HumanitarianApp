using HumanitarianApp.DAL.Models.Enums;

namespace HumanitarianApp.DAL.Models
{
    public class Announcement: BaseModel
    {
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public AnnouncmentCategory Category { get; set; }
    }
}
