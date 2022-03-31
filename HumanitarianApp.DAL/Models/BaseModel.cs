using System.ComponentModel.DataAnnotations;

namespace HumanitarianApp.DAL.Models
{
    public abstract class BaseModel
    {
        [Key]
        [Required]
        public Guid Id { get; set; }
        public DateTime CreationDate { get; set; }
        public bool IsActive { get; set; }

        public BaseModel()
        {
            Id = Guid.NewGuid();
        }
    }
}
