using System.Collections;
using System.Reflection.Metadata.Ecma335;
using HumanitarianApp.BLL.DTO;
using HumanitarianApp.BLL.Services;
using HumanitarianApp.DAL.Models;
using Microsoft.AspNetCore.Mvc;

namespace HumanitarianApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntityController : Controller
    {
        private readonly IEntityService _entityService;

        public EntityController(IEntityService entityService)
        {
            _entityService = entityService;
        }

        [HttpPost, Route("/CreateEntity")]
        public ActionResult CreateEntity(EntityDto entityDto)
        {
            if (entityDto != null)
            {
                _entityService.AddEntity(entityDto);

                return Ok();
            }
            else
            {
                return NoContent();
            }
        }

        [HttpGet, Route("/GetAllEntity")]
        public IEnumerable<EntityDto> GetAllEntity()
        {
            return _entityService.GetAllEntities();
        }

        [HttpGet, Route("/GetByType")]
        public ActionResult<List<EntityDto>> GetByType(byte type)
        {
            return _entityService.GetAllEntitiesByType(type).ToList();
        }


        [HttpGet, Route("/GetById")]
        public ActionResult<EntityDto> EntityById(Guid id)
        {
            return _entityService.GetById(id);
        }

        [HttpGet, Route("/GetEntityByName")]
        public EntityDto GetEntityByName(string name)
        {
            return _entityService.GetByName(name);
        }

        [HttpGet, Route("/GetEntityByAddress")]
        public EntityDto GetEntityByAddress(string address)
        {
            return _entityService.GetByAddress(address);
        }

        [HttpGet, Route("/GetEntityByEmail")]
        public EntityDto GetEntityByEmail(string email)
        {
            return _entityService.GetByEmail(email);
        }

        [HttpPost, Route("/UpdateEntity")]
        public ActionResult UpdateEntity(EntityDto entity)
        {
            _entityService.UpdateEntity(entity);

            return Ok();
        }

        [HttpDelete, Route("/DeleteEntity")]
        public ActionResult DeleteEntity(EntityDto entity)
        {
            _entityService.DeleteEntity(entity);

            return Ok();
        }

    }
}
