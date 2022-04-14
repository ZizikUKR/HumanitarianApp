using HumanitarianApp.Bll.DTO;
using HumanitarianApp.BLL.DTO.Enums;

namespace HumanitarianApp.BLL.DTO
{
    public  class CreateVolunteerDto
    {
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public string Facebook { get; set; }
        public string Instagram { get; set; }
        public string Telegram { get; set; }

        public VolunteerCategoryEnumDto Category { get; set; }
        public BankDetailDto? BankDetails { get; set; }
    }
}
