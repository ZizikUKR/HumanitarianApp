using HumanitarianApp.Bll.DTO;
using HumanitarianApp.BLL.DTO;
using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.BLL.Profile
{
    public class EntityProfile : AutoMapper.Profile
    {
        public EntityProfile()
        {
            CreateMap<VolunteerDto, Volunteer>();
            CreateMap<Volunteer, VolunteerDto>();

            CreateMap<Volunteer, CreateVolunteerDto>();
            CreateMap<CreateVolunteerDto, Volunteer>();

            CreateMap<BankDetail, BankDetailDto>();
            CreateMap<BankDetailDto, BankDetail>();
        }
    }
}
