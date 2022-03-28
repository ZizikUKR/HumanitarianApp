using HumanitarianApp.BLL.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<HumanitarianApp.DAL.HumanityDb.HumanitarianDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("HumanitarianConnection"), 
        b => b.MigrationsAssembly("HumanitarianApp.Api")));

builder.Services.AddScoped<IEntityService, EntityService>();
builder.Services.AddScoped <HumanitarianApp.DAL.Repository.IEntityRepository, HumanitarianApp.DAL.Repository.EntityRepository > ();
builder.Services.AddScoped <HumanitarianApp.DAL.Repository.IBankDetailRepository, HumanitarianApp.DAL.Repository.BankDetailRepository> ();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

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

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
