using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HumanitarianApp.DAL.Repository
{
    public class EntityRepository : BaseRepository<Entity>, IEntityRepository
    {
        private readonly HumanitarianDbContext _dbContext;

        public EntityRepository(HumanitarianDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }
        public IEnumerable<Entity> GetAll()
        {
            return _dbContext.Set<Entity>()
                .Include(e=>e.Category)
                .Include(e=>e.BankDetails)
                .ToList();
        }

        public Entity GetById(Guid id)
        {
            return _dbContext.Set<Entity>()
                .Include(e => e.Category)
                .Include(e => e.BankDetails)
                .FirstOrDefault(e => e.Id == id);
        }

        public Entity GetByName(string name)
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.Name == name);
        }
        public Entity GetByVolunteerCategory(VolunteerCategory category )
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.Category.VolunteerCategory == category);
        }
        public Entity GetByEnterpriseCategory(EnterpriseCategory category)
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.Category.EnterpriseCategory == category);
        }
        public Entity GetByNoticeCategory(NoticeCategory category)
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.Category.NoticeCategory == category);
        }

        public Entity GetByPhoneNumber(string phoneNumber)
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.PhoneNumber == phoneNumber);
        }

        public Entity GetByEmail(string email)
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.Email == email);
        }

        public Entity GetByAddress(string address)
        {
            return _dbContext.Set<Entity>().FirstOrDefault(e => e.Address == address);
        }

    }
}
