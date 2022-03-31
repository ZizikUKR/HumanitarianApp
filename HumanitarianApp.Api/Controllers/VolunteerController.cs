using HumanitarianApp.BLL.DTO;
using HumanitarianApp.BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace HumanitarianApp.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class VolunteerController : ControllerBase
    {
        private readonly IVolunteerService _entityService;

        public VolunteerController(IVolunteerService entityService)
        {
            _entityService = entityService;
        }

        [HttpPost]
        public async Task<ActionResult> CreateEntity(CreateVolunteerDto entityDto)
        {
            if (entityDto == null)
            {
                return NoContent();
                
            }
            await _entityService.AddEntity(entityDto);

            return Ok();
        }

        [HttpGet]
        public async Task<IEnumerable<VolunteerDto>> GetAllEntity()
        {
            return await _entityService.GetAllEntities();
        }

        [HttpGet]
        public async Task<ActionResult<VolunteerDto>> EntityById(Guid id)
        {
            return  Ok(await  _entityService.GetById(id));
        }

        [HttpGet]
        public async Task<ActionResult<VolunteerDto>> GetEntityByName(string name)
        {
            return Ok(await _entityService.GetByName(name));
        }

        [HttpGet]
        public async Task<ActionResult<VolunteerDto>> GetEntityByAddress(string address)
        {
            return Ok(await _entityService.GetByAddress(address));
        }

        [HttpGet]
        public async Task<ActionResult<VolunteerDto>> GetEntityByEmail(string email)
        {
            return  Ok(await _entityService.GetByEmail(email));
        }

        [HttpPost]
        public async Task<ActionResult> UpdateEntity(VolunteerDto entity)
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
