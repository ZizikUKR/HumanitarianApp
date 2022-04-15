using HumanitarianApp.BLL.DTO;
using HumanitarianApp.DAL.Repository.Interfaces;

namespace HumanitarianApp.BLL.Services
{
    public class UserService :IUserService
    {
        //private readonly IUserRepository _userRepository;
        //public UserService(IUserRepository userRepository)
        //{
        //    _userRepository = userRepository;
        //}
        //public async  Task SaveRefreshToken(UserTokenDto token)
        //{
        //    var user = await _userRepository.GetById(token.Id);

        //    user.RefreshToken = token.RefreshToken;
        //    user.RefreshTokenExpiryTime = token.RefreshTokenExpiryTime;

        //    await _userRepository.AddRefreshToken(user);
        //}
    }
}
