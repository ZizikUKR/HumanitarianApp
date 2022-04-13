namespace HumanitarianApp.BLL.DTO
{
    public class UserTokenDto
    {
        public string Id { get; set; }
        public string RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
    }
}
