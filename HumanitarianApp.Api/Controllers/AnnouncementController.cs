using HumanitarianApp.BLL.DTO;
using HumanitarianApp.BLL.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HumanitarianApp.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AnnouncementController : ControllerBase
    {
        private readonly IAnnouncementService _announcementService;

        public AnnouncementController(IAnnouncementService announcementService)
        {
            _announcementService = announcementService;
        }

        [HttpPost]
        public async Task<ActionResult> Create(AnnouncementDto organizationDto)
        {
            if (organizationDto == null)
            {
                return NoContent();

            }

            await _announcementService.AddAnnouncement(organizationDto);

            return Ok();
        }

        [HttpGet]
        public async Task<IEnumerable<AnnouncementDto>> GetAllActive(int pageNumber)
        {
            return await _announcementService.GetAllActiveAnnouncements(pageNumber);
        }

        [HttpGet]
        [Authorize]
        public async Task<IEnumerable<AnnouncementDto>> GetAllUnActive(int pageNumber)
        {
            return await _announcementService.GetAllUnActiveAnnouncements(pageNumber);
        }

        [HttpGet]
        public async Task<ActionResult<AnnouncementDto>> GetById(Guid id)
        {
            return Ok(await _announcementService.GetById(id));
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult> Update(UpdateAnnouncementDto entity)
        {
            await _announcementService.UpdateAnnouncement(entity);

            return Ok();
        }

        [HttpDelete]
        public async Task<ActionResult> Delete(Guid id)
        {
            await _announcementService.DeleteAnnouncement(id);

            return Ok();
        }

    }
}
