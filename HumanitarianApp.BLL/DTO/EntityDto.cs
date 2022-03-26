using HumanitarianApp.Bll.DTO;
using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.BLL.DTO
{
    public class EntityDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Message { get; set; }
        public EntityType Type { get; set; }
        public BankDetailDto? BankDetails{ get; set; }
    }
}
