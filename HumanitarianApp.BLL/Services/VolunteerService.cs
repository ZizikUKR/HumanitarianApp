using AutoMapper;
using HumanitarianApp.BLL.DTO;
using HumanitarianApp.DAL.Models;
using HumanitarianApp.DAL.Models.Enums;
using HumanitarianApp.DAL.Repository;

namespace HumanitarianApp.BLL.Services
{
    public class VolunteerService : IVolunteerService
    {
        private readonly IVolunteerRepository _volunteerRepository;
        private readonly IBankDetailRepository _bankDetailRepository;
        private readonly IMapper _mapper;

        public VolunteerService(IVolunteerRepository volunteerRepository, IBankDetailRepository bankDetailRepository, IMapper mapper)
        {
            _volunteerRepository = volunteerRepository;
            _bankDetailRepository = bankDetailRepository;
            _mapper = mapper;
        }

        public async Task AddEntity(CreateVolunteerDto entity)
        {
            var entityForCreate = _mapper.Map<Volunteer>(entity);
            entityForCreate.CreationDate = DateTime.Now;

            if (entityForCreate == null)
            {
                throw new Exception("Entity doesn't map");
            }

            await _volunteerRepository.Create(entityForCreate);
        }

        public async Task<IEnumerable<VolunteerDto>> GetAllActiveVolunteer(int pageNumber)
        {
            var entitiesDto = new List<VolunteerDto>();
            var entities = await _volunteerRepository.GetAllActiveRecord(pageNumber);

            foreach (var entity in entities)
            {
                var entityDto = _mapper.Map<VolunteerDto>(entity);
                entitiesDto.Add(entityDto);
            }

            return entitiesDto;
        }
        public async Task<IEnumerable<VolunteerDto>> GetAllUnActiveVolunteer(int pageNumber)
        {
            var entitiesDto = new List<VolunteerDto>();
            var entities = await _volunteerRepository.GetAllUnActiveRecord(pageNumber);

            foreach (var entity in entities)
            {
                var entityDto = _mapper.Map<VolunteerDto>(entity);
                entitiesDto.Add(entityDto);
            }

            return entitiesDto;
        }

        public async Task<VolunteerDto> GetById(Guid id)
        {
            var entity = await _volunteerRepository.GetById(id);

            if (entity == null)
            {
                throw new Exception("Entity doesn't  found");
            }
            var entityDto = _mapper.Map<VolunteerDto>(entity);

            return entityDto;
        }

        public async Task<VolunteerDto> GetByName(string name)
        {
            var entity = await _volunteerRepository.GetByName(name);

            if (entity == null)
            {
                throw new Exception("Entity doesn't  found");
            }
            var entityDto = _mapper.Map<VolunteerDto>(entity);

            return entityDto;
        }

        public async Task<VolunteerDto> GetByEmail(string email)
        {
            var entity = await _volunteerRepository.GetByEmail(email);

            if (entity == null)
            {
                throw new Exception("Entity doesn't  found");
            }
            var entityDto = _mapper.Map<VolunteerDto>(entity);

            return entityDto;
        }

        public async Task<VolunteerDto> GetByAddress(string address)
        {
            var entity = await _volunteerRepository.GetByAddress(address);

            if (entity == null)
            {
                throw new Exception("Entity doesn't  found");
            }
            var entityDto = _mapper.Map<VolunteerDto>(entity);

            return entityDto;
        }

        public async Task UpdateEntity(VolunteerDto entityDto)
        {
            var entity = await _volunteerRepository.GetById(entityDto.Id);

            if (entity == null)
            {
                throw new Exception("Entity doesn't exist");
            }
            entity.Email = entityDto.Email;
            entity.PhoneNumber = entityDto.PhoneNumber;
            entity.Name = entityDto.Name;
            entity.IsActive = entityDto.IsActive;
            entity.City = entityDto.City;
            entity.Address = entityDto.Address;
            entity.Description = entityDto.Description;
            entity.Facebook= entityDto.Facebook;
            entity.Instagram = entityDto.Instagram;
            entity.Telegram = entityDto.Telegram;
            entity.Category = (VolunteerCategory)entityDto.Category;
            entity.BankDetails.AccountNumber = entityDto.BankDetails.AccountNumber;
            entity.BankDetails.CardNumber = entityDto.BankDetails.CardNumber;
            entity.BankDetails.EDRPO = entityDto.BankDetails.EDRPO;
            entity.BankDetails.FullBankName= entityDto.BankDetails.FullBankName;
            entity.BankDetails.IBAN = entityDto.BankDetails.IBAN;
            entity.BankDetails.MFO = entityDto.BankDetails.MFO;
            entity.BankDetails.ShortBankName= entityDto.BankDetails.ShortBankName;

            await _volunteerRepository.Update(entity);
        }

        public async Task DeleteEntity(Guid id)
        {
            var entity = await _volunteerRepository.GetById(id);

            if (entity == null)
            {
                throw new Exception("Entity was deleted already");
            }
            await _volunteerRepository.Delete(entity);
        }
    }
}
