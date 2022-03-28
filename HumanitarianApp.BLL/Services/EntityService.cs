using AutoMapper;
using HumanitarianApp.BLL.DTO;
using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;
using HumanitarianApp.DAL.Repository;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using EntityType = HumanitarianApp.DAL.Models.EntityType;

namespace HumanitarianApp.BLL.Services
{
    public class EntityService : IEntityService
    {
        private readonly IEntityRepository _entityRepository;
        private readonly IBankDetailRepository _bankDetailRepository;
        private readonly IMapper _mapper;
        private readonly HumanitarianDbContext _dbContext;

        public EntityService(IEntityRepository entityRepository, IBankDetailRepository bankDetailRepository, IMapper mapper, HumanitarianDbContext dbContext)
        {
            _entityRepository = entityRepository;
            _bankDetailRepository = bankDetailRepository;
            _mapper = mapper;
            _dbContext = dbContext;
        }

        public async Task AddEntity(CreateEntityDto entity)
        {
            var entityForCreate = _mapper.Map<Entity>(entity);

            if (entityForCreate == null)
            {
                throw new Exception("Entity doesn't map");
            }
            _entityRepository.Create(entityForCreate);

        }

        public async Task<IEnumerable<EntityDto>> GetAllEntities()
        {
            var entitiesDto = new List<EntityDto>();
            var entities = _entityRepository.GetAll();

            foreach (var entity in entities)
            {
                var entityDto = _mapper.Map<EntityDto>(entity);
                entitiesDto.Add(entityDto);
            }

            return entitiesDto;
        }

        public async Task<IEnumerable<EntityDto>> GetAllEntitiesByType(byte type)
        {
            var entitiesDto = new List<EntityDto>();
            IEnumerable<Entity> entities = new List<Entity>();

            switch (type)
            {
                case 0:
                    entities = _entityRepository.GetAll().Where(e => e.Type == EntityType.Volontiers);
                    break;
                case 1:
                    entities = _entityRepository.GetAll().Where(e => e.Type == EntityType.Enterprises);
                    break;
                case 2:
                    entities = _entityRepository.GetAll().Where(e => e.Type == EntityType.Notice);
                    break;

            }

            foreach (var entity in entities)
            {
                var entityDto = _mapper.Map<EntityDto>(entity);
                entitiesDto.Add(entityDto);
            }

            return entitiesDto;
        }

        public async Task<EntityDto> GetById(Guid id)
        {
            var entity = _entityRepository.GetById(id);

            if (entity == null)
            {
                throw new Exception("Entity doesn't  found");
            }
            var entityDto = _mapper.Map<EntityDto>(entity);

            return entityDto;

        }

        public async Task<EntityDto> GetByName(string name)
        {
            var entity = _dbContext.Entities.FirstOrDefault(e => e.Name.Contains(name));

            if (entity == null)
            {
                throw new Exception("Entity doesn't  found");
            }
            var entityDto = _mapper.Map<EntityDto>(entity);

            return entityDto;

        }

        public async Task<EntityDto> GetByEmail(string email)
        {
            var entity = _dbContext.Entities.FirstOrDefault(e => e.Email.Contains(email));

            if (entity == null)
            {
                throw new Exception("Entity doesn't  found");
            }
            var entityDto = _mapper.Map<EntityDto>(entity);

            return entityDto;

        }

        public async Task<EntityDto> GetByAddress(string address)
        {
            var entity = _dbContext.Entities.FirstOrDefault(e => e.Address.Contains(address));

            if (entity == null)
            {
                throw new Exception("Entity doesn't  found");
            }
            var entityDto = _mapper.Map<EntityDto>(entity);

            return entityDto;
        }

        public async Task UpdateEntity(EntityDto entityDto)
        {
            var entity = _entityRepository.GetById(entityDto.Id);

            if (entity == null)
            {
                throw new Exception("Entity doesn't exist");
            }
            entity.Type = entityDto.Type;
            entity.Email = entityDto.Email;
            entity.PhoneNumber = entityDto.PhoneNumber;
            entity.Name = entityDto.Name;
            entity.Address = entityDto.Address;
            entity.Message = entityDto.Message;
            _entityRepository.Update(entity);
        }

        public async Task DeleteEntity(Guid id)
        {
            var entity = _entityRepository.GetById(id);

            if (entity == null)
            {
                throw new Exception("Entity was deleted already");
            }
            _entityRepository.Delete(entity);
        }
    }
}
