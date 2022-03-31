using HumanitarianApp.BLL.DTO;
using HumanitarianApp.BLL.Services;
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
            public async Task<ActionResult> CreateEntity(AnnouncementDto organizationDto)
            {
                if (organizationDto == null)
                {
                    return NoContent();

                }

                await _announcementService.AddAnnouncement(organizationDto);

                return Ok();
            }

            [HttpGet]
            public async Task<IEnumerable<AnnouncementDto>> GetAllEntity()
            {
                return await _announcementService.GetAllAnnouncements();
            }

            [HttpGet]
            public async Task<ActionResult<AnnouncementDto>> EntityById(Guid id)
            {
                return Ok(await _announcementService.GetById(id));
            }

            [HttpPost]
            public async Task<ActionResult> UpdateEntity(UpdateAnnouncementDto entity)
            {
                await _announcementService.UpdateAnnouncement(entity);

                return Ok();
            }

            [HttpDelete]
            public async Task<ActionResult> DeleteEntity(Guid id)
            {
                await _announcementService.DeleteAnnouncement(id);

                return Ok();
            }

        }
}
