using HumanitarianApp.Bll.DTO;
using HumanitarianApp.BLL.DTO;
using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.BLL.Profile
{
    public class EntityProfile : AutoMapper.Profile
    {
        public EntityProfile()
        {
            CreateMap<EntityDto, Entity>();
            CreateMap<Entity, EntityDto>();

            CreateMap<Entity, CreateEntityDto>();
            CreateMap<CreateEntityDto, Entity>();

            CreateMap<BankDetail, BankDetailDto>();
            CreateMap<BankDetailDto, BankDetail>();

            CreateMap<Category, CategoryDto>();
            CreateMap<CategoryDto, Category>();
        }
    }
}
