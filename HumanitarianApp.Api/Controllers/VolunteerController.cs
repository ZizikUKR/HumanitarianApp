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
        public async Task<ActionResult> Create(CreateVolunteerDto entityDto)
        {
            if (entityDto == null)
            {
                return NoContent();
                
            }
            await _entityService.AddEntity(entityDto);

            return Ok();
        }

        [HttpGet]
        public async Task<IEnumerable<VolunteerDto>> GetAll(int pageNumber)
        {
            return await _entityService.GetAll(pageNumber);
        }

        [HttpGet]
        public async Task<ActionResult<VolunteerDto>> GetById(Guid id)
        {
            return  Ok(await  _entityService.GetById(id));
        }

        [HttpGet]
        public async Task<ActionResult<VolunteerDto>> GetByName(string name)
        {
            return Ok(await _entityService.GetByName(name));
        }

        [HttpGet]
        public async Task<ActionResult<VolunteerDto>> GetByAddress(string address)
        {
            return Ok(await _entityService.GetByAddress(address));
        }

        [HttpGet]
        public async Task<ActionResult<VolunteerDto>> GetByEmail(string email)
        {
            return  Ok(await _entityService.GetByEmail(email));
        }

        [HttpPost]
        public async Task<ActionResult> Update(VolunteerDto entity)
        {
            await _entityService.UpdateEntity(entity);

            return Ok();
        }

        [HttpDelete]
        public async Task<ActionResult> Delete(Guid id)
        {
           await _entityService.DeleteEntity(id);

            return Ok();
        }

    }
}
