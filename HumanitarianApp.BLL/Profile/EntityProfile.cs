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

            CreateMap<Organization, OrganizationDto>();
            CreateMap<OrganizationDto, Organization>();

            CreateMap<Organization, UpdateOrganizationDto>();
            CreateMap<UpdateOrganizationDto, Organization>();

            CreateMap<Announcement, AnnouncementDto>();
            CreateMap<AnnouncementDto, Announcement>();

            CreateMap<Announcement, UpdateAnnouncementDto>();
            CreateMap<UpdateAnnouncementDto, Announcement>();
        }
    }
}
