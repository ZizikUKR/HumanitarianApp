using System.Security.Claims;
using AutoMapper;
using HumanitarianApp.BLL.DTO;
using HumanitarianApp.BLL.Models;
using HumanitarianApp.BLL.Services;
using HumanitarianApp.DAL.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HumanitarianApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _userSignInManager;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;
        private readonly IUserService _userService;

        public AccountController(IMapper mapper, UserManager<User> userManager,
            SignInManager<User> userSignInManager,
            ITokenService tokenService,
            IUserService userService)
        {
            _userManager = userManager;
            _userSignInManager = userSignInManager;
            _mapper = mapper;
            _tokenService = tokenService;
            _userService = userService;
        }

        [HttpPost] 
        //[ValidateAntiForgeryToken] //используется для сравнения Cookie формы и ендпоинта, если они не совпадают то не дает доступ к данным
        public async Task<IActionResult> Registration(UserRegistrationDto registrationDto)
        {
            if (!ModelState.IsValid)
            {
                return NoContent();
            }

            var user = _mapper.Map<User>(registrationDto);
            var result = await _userManager.CreateAsync(user, registrationDto.Password);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.TryAddModelError(error.Code, error.Description);
                }
                return BadRequest();
            }

            await _userManager.AddToRoleAsync(user, "Administrator");

            return Ok();
        }

        [HttpPost]
      //  [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(UserLoginDto userLoginDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var user = _mapper.Map<User>(userLoginDto);

            if (user == null)
            {
                throw new Exception("Can`t map object to User");
            }

            var result = await _userSignInManager.PasswordSignInAsync(userLoginDto.Email, userLoginDto.Password,
                userLoginDto.RememberMe, false);

            if (!result.Succeeded)
            {
                ModelState.AddModelError("", "Invalid UserName or Password");

                return BadRequest();
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, userLoginDto.Email),
                new Claim(ClaimTypes.Role, "Administrator")
            };

            var accessToken = _tokenService.GenerateAccessToken(claims);
            var refreshToken = _tokenService.GenerateRefreshToken();




            var resultToken = new TokenModel {AccessToken = accessToken, RefreshToken = refreshToken};

            return Ok(resultToken);
        }

        [HttpPost]
        public async Task<IActionResult> LogOut()
        {
            await _userSignInManager.SignOutAsync();

            return Ok("User sign out from the system");
        }
    }
}
