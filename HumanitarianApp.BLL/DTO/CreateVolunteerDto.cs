﻿using HumanitarianApp.Bll.DTO;
using HumanitarianApp.BLL.DTO.Enums;

namespace HumanitarianApp.BLL.DTO
{
    public  class CreateVolunteerDto
    {
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string Message { get; set; }
        public VolunteerCategoryEnumDto Category { get; set; }
        public ICollection<BankDetailDto>? BankDetails { get; set; }
    }
}