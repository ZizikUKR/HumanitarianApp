﻿
using HumanitarianApp.BLL.DTO.Enums;

namespace HumanitarianApp.BLL.DTO
{
    public class AnnouncementDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public NoticeCategoryEnumDto Category { get; set; }
    }
}
