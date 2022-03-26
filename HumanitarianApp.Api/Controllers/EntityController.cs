using HumanitarianApp.BLL.DTO;
using HumanitarianApp.BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace HumanitarianApp.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class EntityController : ControllerBase
    {
        private readonly IEntityService _entityService;

        public EntityController(IEntityService entityService)
        {
            _entityService = entityService;
        }

        [HttpPost]
        public async Task<ActionResult> CreateEntity(EntityDto entityDto)
        {
            if (entityDto == null)
            {
                return NoContent();
                
            }
            await _entityService.AddEntity(entityDto);

            return Ok();
        }

        [HttpGet]
        public async Task<IEnumerable<EntityDto>> GetAllEntity()
        {
            return await _entityService.GetAllEntities();
        }

        [HttpGet]
        public async Task<IEnumerable<EntityDto>> GetEntityByType(byte type)
        {
            return  await _entityService.GetAllEntitiesByType(type);
        }


        [HttpGet]
        public async Task<ActionResult<EntityDto>> EntityById(Guid id)
        {
            return  Ok(await  _entityService.GetById(id));
        }

        [HttpGet]
        public async Task<ActionResult<EntityDto>> GetEntityByName(string name)
        {
            return Ok(await _entityService.GetByName(name));
        }

        [HttpGet]
        public async Task<ActionResult<EntityDto>> GetEntityByAddress(string address)
        {
            return Ok(await _entityService.GetByAddress(address));
        }

        [HttpGet]
        public async Task<ActionResult<EntityDto>> GetEntityByEmail(string email)
        {
            return  Ok(await _entityService.GetByEmail(email));
        }

        [HttpPost]
        public async Task<ActionResult> UpdateEntity(EntityDto entity)
        {
            await _entityService.UpdateEntity(entity);

            return Ok();
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteEntity(Guid id)
        {
           await _entityService.DeleteEntity(id);

            return Ok();
        }

    }
}
