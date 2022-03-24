using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;

namespace HumanitarianApp.DAL.Repository
{
    public class BankDetailRepository : BaseRepository<BankDetail>, IBankDetailRepository
    {
        public BankDetailRepository(HumanitarianDbContext dbContext) : base(dbContext)
        {
        }
    }
}
