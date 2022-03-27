using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
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
    opt.UseSqlServer(builder.Configuration.GetConnectionString("HumanitarianConnection"), 
        b => b.MigrationsAssembly("HumanitarianApp.Api")));

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

app.UseCors("OriginPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
