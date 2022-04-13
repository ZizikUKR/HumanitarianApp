using HumanitarianApp.Api.Middlewares;
using HumanitarianApp.BLL.Services;
using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

var logger = new LoggerConfiguration()
  .ReadFrom.Configuration(builder.Configuration)
  .Enrich.FromLogContext()
  .CreateLogger();
builder.Logging.ClearProviders();
builder.Logging.AddSerilog(logger);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ConfigureCors
{
    IConfigurationSection corsOptions = builder.Configuration.GetSection("Cors");
    string origins = corsOptions["Origins"];
    builder.Services.AddCors(options =>
    {
        options.AddPolicy("OriginPolicy", builder =>
        {
            builder.WithOrigins(origins.Split(",", StringSplitOptions.RemoveEmptyEntries).ToArray())
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
        });
    });
}

builder.Services.AddDbContext<HumanitarianApp.DAL.HumanityDb.HumanitarianDbContext>(opt =>
    opt.UseSqlite(builder.Configuration.GetConnectionString("HumanitarianConnection"),
        b => b.MigrationsAssembly("HumanitarianApp.Api")));

builder.Services.AddScoped<IVolunteerService, VolunteerService>();
builder.Services.AddScoped<IOrganizationService, OrganizationService>();
builder.Services.AddScoped<IAnnouncementService, AnnouncementService>();
builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped <HumanitarianApp.DAL.Repository.IVolunteerRepository, HumanitarianApp.DAL.Repository.VolunteerRepository > ();
builder.Services.AddScoped <HumanitarianApp.DAL.Repository.Interfaces.IUserRepository, HumanitarianApp.DAL.Repository.UserRepository > ();
builder.Services.AddScoped <HumanitarianApp.DAL.Repository.IOrganizationRepository, HumanitarianApp.DAL.Repository.OrganizationRepository > ();
builder.Services.AddScoped <HumanitarianApp.DAL.Repository.IAnnouncementRepository, HumanitarianApp.DAL.Repository.AnnouncementRepository > ();
builder.Services.AddScoped <HumanitarianApp.DAL.Repository.IBankDetailRepository, HumanitarianApp.DAL.Repository.BankDetailRepository> ();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddIdentity<User, IdentityRole>()
    .AddEntityFrameworkStores<HumanitarianDbContext>();

var app = builder.Build();
using (var scope = app.Services.CreateScope())
{
    var dataContext = scope.ServiceProvider.GetRequiredService<HumanitarianApp.DAL.HumanityDb.HumanitarianDbContext>();
    dataContext.Database.Migrate();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpStatusCodeExceptionMiddleware();

app.UseCors("OriginPolicy");

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();