using HumanitarianApp.Bll.DTO;
using HumanitarianApp.BLL.DTO;
using HumanitarianApp.BLL.Models;
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

            CreateMap<Organization, OrganizationDto>();
            CreateMap<OrganizationDto, Organization>();

            CreateMap<Organization, UpdateOrganizationDto>();
            CreateMap<UpdateOrganizationDto, Organization>();

            CreateMap<Announcement, AnnouncementDto>();
            CreateMap<AnnouncementDto, Announcement>();

            CreateMap<Announcement, UpdateAnnouncementDto>();
            CreateMap<UpdateAnnouncementDto, Announcement>();

            CreateMap<UserRegistrationDto, User>()
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));
            CreateMap<User, UserRegistrationDto>();

            //CreateMap<UserTokenDto, User>();
            //CreateMap<User, UserTokenDto>();

            CreateMap<UserLoginDto, User>();
            CreateMap<User, UserLoginDto>();
        }
    }
}
