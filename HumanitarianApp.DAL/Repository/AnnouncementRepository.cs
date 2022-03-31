using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.DAL.Repository
{
    public class AnnouncementRepository : BaseRepository<Announcement>, IAnnouncementRepository
    {
        public AnnouncementRepository(HumanitarianDbContext dbContext) : base(dbContext)
        {
        }
    }
}
