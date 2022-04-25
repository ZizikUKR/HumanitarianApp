import TokenService from "./TokenService";
import Service from './Service';

export class AuthService {
  service = new Service();

  async login(username, password) {

    let loginDto = {
      email: username,
      password: password,
      rememberMe: true
    };

    let json = JSON.stringify(loginDto);
    let tokenService = new TokenService();

     return await  this.service.post(`${process.env.REACT_APP_API_URL}Account/Login`, json)
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          tokenService.setUser(data);
        }
        return data;
      });
     }

     async GenerateToken() {

       return await  this.service.post(`${process.env.REACT_APP_API_URL}Account/GenerateTokens`)
        .then(response => response.json())
        .then(data => {
          return data;
        });
       }

  logout() {
    TokenService.removeUser();
  }
  getCurrentUser() {
    return TokenService.getUser();
  }
}
export default AuthService;
