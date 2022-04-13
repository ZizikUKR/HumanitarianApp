using HumanitarianApp.DAL.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HumanitarianApp.DAL.HumanityDb
{
    public class HumanitarianDbContext : IdentityDbContext<User>
    {
        public HumanitarianDbContext(DbContextOptions<HumanitarianDbContext> opt) : base(opt)
        {

        }
        public DbSet<Volunteer> Volontiers { get; set; }
        public DbSet<BankDetail> BankDetails { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<Announcement> Announcements { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Volunteer>()
                .HasOne(b=>b.BankDetails)
                .WithOne(b => b.Volunteer)
                .HasForeignKey<BankDetail>(c => c.VolunteerId);

            modelBuilder.ApplyConfiguration(new RoleConfiguration());
        }
    }
    public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(
                new IdentityRole
                {
                    Name = "Administrator",
                    NormalizedName = "ADMINISTRATOR"
                });
        }
    }
}
