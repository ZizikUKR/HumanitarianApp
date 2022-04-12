using System.ComponentModel.DataAnnotations;

namespace HumanitarianApp.BLL.DTO
{
    public class UserLoginDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }

        //public string RefreshToken { get; set; }
        //public DateTime RefreshTokenExpiryTime { get; set; }
    }
}
