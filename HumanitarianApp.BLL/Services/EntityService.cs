using AutoMapper;
using HumanitarianApp.BLL.DTO;
using HumanitarianApp.DAL.HumanityDb;
using HumanitarianApp.DAL.Models;
using HumanitarianApp.DAL.Repository;

namespace HumanitarianApp.BLL.Services
{
    public class EntityService : IEntityService
    {
        private readonly IEntityRepository _entityRepository;
        private readonly IMapper _mapper;
        private readonly HumanitarianDbContext _dbContext;

        public EntityService(IEntityRepository entityRepository, IMapper mapper, HumanitarianDbContext dbContext)
        {
            _entityRepository = entityRepository;
            _mapper = mapper;
            _dbContext = dbContext;
        }

        public void AddEntity(EntityDto entity)
        {
            var entityForCreate = _mapper.Map<Entity>(entity);

            if (entityForCreate != null)
            {
                _entityRepository.Create(entityForCreate);
            }
        }

        public IEnumerable<EntityDto> GetAllEntities()
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

        public IEnumerable<EntityDto> GetAllEntitiesByType(byte type)
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

        public EntityDto GetById(Guid id)
        {
            var entity = _entityRepository.GetById(id);

            if (entity != null)
            {
                var entityDto = _mapper.Map<EntityDto>(entity);

                return entityDto;
            }

            throw new Exception("Entity doesn't  found");
        }

        public EntityDto GetByName(string name)
        {
            var entity = _dbContext.Entities.FirstOrDefault(e => e.Name.Contains(name));

            if (entity != null)
            {
                var entityDto = _mapper.Map<EntityDto>(entity);

                return entityDto;
            }

            throw new Exception("Entity doesn't  found");
        }

        public EntityDto GetByEmail(string email)
        {
            var entity = _dbContext.Entities.FirstOrDefault(e => e.Email.Contains(email));

            if (entity != null)
            {
                var entityDto = _mapper.Map<EntityDto>(entity);

                return entityDto;
            }

            throw new Exception("Entity doesn't  found");
        }

        public EntityDto GetByAddress(string address)
        {
            var entity = _dbContext.Entities.FirstOrDefault(e => e.Address.Contains(address));

            if (entity != null)
            {
                var entityDto = _mapper.Map<EntityDto>(entity);

                return entityDto;
            }

            throw new Exception("Entity doesn't  found");
        }

        public void UpdateEntity(EntityDto entityDto)
        {
            if (entityDto.Id != null)
            {
                var entity = _entityRepository.GetById(entityDto.Id);

                if (entity != null)
                {
                    entity.Type =entityDto.Type;
                    entity.Email =entityDto.Email;
                    entity.PhoneNumber =entityDto.PhoneNumber;
                    entity.Name =entityDto.Name;
                    entity.Address =entityDto.Address;
                    entity.Message =entityDto.Message;
                    _entityRepository.Update(entity);
                }
            }
        }

        public void DeleteEntity(EntityDto entityDto)
        {
            if (entityDto.Id != null)
            {
                var entity = _entityRepository.GetById(entityDto.Id);

                if (entity != null)
                {
                    _entityRepository.Delete(entity);
                }
            }
        }
    }
}
