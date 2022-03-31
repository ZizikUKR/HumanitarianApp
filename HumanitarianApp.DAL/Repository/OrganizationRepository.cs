using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.DAL.Repository
{
    public class OrganizationRepository : BaseRepository<Organization>, IOrganizationRepository
    {
        public OrganizationRepository(HumanitarianDbContext dbContext) : base(dbContext)
        {
        }
    }
}
