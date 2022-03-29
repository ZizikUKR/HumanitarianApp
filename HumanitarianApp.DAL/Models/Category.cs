using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HumanitarianApp.DAL.Models
{
    public class Category
    {
        [Key]
        [Column("CategoryId")]
        public Guid Id { get; set; }
        public VolunteerCategory? VolunteerCategory { get; set; }
        public EnterpriseCategory? EnterpriseCategory { get; set; }
        public NoticeCategory? NoticeCategory { get; set; }
        public Guid EntityId { get; set; }

        //Revers Navigation 
        public virtual Entity Entity { get; set; }
    }
}
