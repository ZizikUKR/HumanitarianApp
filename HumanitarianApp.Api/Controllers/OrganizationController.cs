using HumanitarianApp.BLL.DTO;
using HumanitarianApp.BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace HumanitarianApp.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrganizationController : ControllerBase
    {
        private readonly IOrganizationService _organizationService;

        public OrganizationController(IOrganizationService organizationService)
        {
            _organizationService = organizationService;
        }

        [HttpPost]
        public async Task<ActionResult> CreateEntity(OrganizationDto organizationDto)
        {
            if (organizationDto == null)
            {
                return NoContent();

            }

            await _organizationService.AddOrganization(organizationDto);

            return Ok();
        }

        [HttpGet]
        public async Task<IEnumerable<OrganizationDto>> GetAllEntity()
        {
            return await _organizationService.GetAllOrganizations();
        }

        [HttpGet]
        public async Task<ActionResult<OrganizationDto>> EntityById(Guid id)
        {
            return Ok(await _organizationService.GetById(id));
        }

        [HttpPost]
        public async Task<ActionResult> UpdateEntity(UpdateOrganizationDto entity)
        {
            await _organizationService.UpdateOrganization(entity);

            return Ok();
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteEntity(Guid id)
        {
            await _organizationService.DeleteOrganization(id);

            return Ok();
        }

    }
}
