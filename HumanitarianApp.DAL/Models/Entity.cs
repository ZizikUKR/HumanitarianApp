using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HumanitarianApp.DAL.Models
{
    public class Entity : BaseModel
    {
        [Key]
        [Required]
        [Column("EntityId")]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Message { get; set; }
        public EntityType Type { get; set; }

        //Reverse Navigation
        public virtual ICollection<BankDetail>? BankDetails { get; set; }
    }
}
