using HumanitarianApp.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HumanitarianApp.DAL.HumanityDb
{
    public class HumanitarianDbContext : DbContext
    {
        public HumanitarianDbContext(DbContextOptions<HumanitarianDbContext> opt) : base(opt)
        {

        }
        public DbSet<Volunteer> Volontiers { get; set; }
        public DbSet<BankDetail> BankDetails { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<Announcement> Announcements { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Volunteer>()
                .HasMany(p => p.BankDetails)
                .WithOne(b => b.Volunteer)
                .HasForeignKey(c => c.VolunteerId);
        }
    }
}
