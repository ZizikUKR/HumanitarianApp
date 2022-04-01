using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HumanitarianApp.DAL.Repository
{
    public class VolunteerRepository : BaseRepository<Volunteer>, IVolunteerRepository
    {
        private readonly HumanitarianDbContext _dbContext;

        public VolunteerRepository(HumanitarianDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Volunteer>> GetAll()
        {
            return await _dbContext.Set<Volunteer>()
                .Include(c=>c.BankDetails)
                .ToListAsync();
        }

        public async Task<Volunteer> GetById(Guid id)
        {
            return await _dbContext.Set<Volunteer>()
                .Include(c => c.BankDetails)
                    .FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task<Volunteer> GetByName(string name)
        {
            return await _dbContext.Set<Volunteer>()
                .Include(c => c.BankDetails)
                .FirstOrDefaultAsync(e => e.Name == name);
        }

        public async Task<Volunteer> GetByPhoneNumber(string phoneNumber)
        {
            return await _dbContext.Set<Volunteer>()
                .Include(c => c.BankDetails)
                .FirstOrDefaultAsync(e => e.PhoneNumber == phoneNumber);
        }

        public async Task<Volunteer> GetByEmail(string email)
        {
            return await _dbContext.Set<Volunteer>()
                .Include(c => c.BankDetails)
                .FirstOrDefaultAsync(e => e.Email == email);
        }

        public async Task<Volunteer> GetByAddress(string address)
        {
            return await _dbContext.Set<Volunteer>()
                .Include(c => c.BankDetails)
                .FirstOrDefaultAsync(e => e.Address == address);
        }

    }
}
