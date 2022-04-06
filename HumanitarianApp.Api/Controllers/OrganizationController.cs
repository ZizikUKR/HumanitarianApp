using HumanitarianApp.BLL.DTO;
using HumanitarianApp.BLL.Services;
using Microsoft.AspNetCore.Authorization;
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
        public async Task<ActionResult> Create(OrganizationDto organizationDto)
        {
            if (organizationDto == null)
            {
                return NoContent();

            }

            await _organizationService.AddOrganization(organizationDto);

            return Ok();
        }

        [HttpGet]
        public async Task<IEnumerable<OrganizationDto>> GetAllActive(int pageNumber)
        {
            return await _organizationService.GetAllActiveOrganizations(pageNumber);
        }

        [HttpGet]
        [Authorize]
        public async Task<IEnumerable<OrganizationDto>> GetAllUnActive(int pageNumber)
        {
            return await _organizationService.GetAllUnActiveOrganizations(pageNumber);
        }

        [HttpGet]
        public async Task<ActionResult<OrganizationDto>> GetById(Guid id)
        {
            return Ok(await _organizationService.GetById(id));
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult> Update(UpdateOrganizationDto entity)
        {
            await _organizationService.UpdateOrganization(entity);

            return Ok();
        }

        [HttpDelete]
        public async Task<ActionResult> Delete(Guid id)
        {
            await _organizationService.DeleteOrganization(id);

            return Ok();
        }

    }
}
