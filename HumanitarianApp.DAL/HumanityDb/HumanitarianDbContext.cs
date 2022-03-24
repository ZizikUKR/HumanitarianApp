using HumanitarianApp.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HumanitarianApp.DAL.HumanityDb
{
    public class HumanitarianDbContext : DbContext
    {
        public HumanitarianDbContext(DbContextOptions<HumanitarianDbContext> opt) : base(opt)
        {

        }
        public DbSet<Entity> Entities { get; set; }
        public DbSet<BankDetail> BankDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Entity>()
                .HasMany(p => p.BankDetails)
                .WithOne(b => b.Entity)
                .HasForeignKey(c => c.EntityId);
        }
    }
}
