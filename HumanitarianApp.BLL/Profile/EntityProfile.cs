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
        }
    }
}
