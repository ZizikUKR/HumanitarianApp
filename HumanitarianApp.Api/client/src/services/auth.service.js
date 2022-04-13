import { Component } from "react";

import TokenService from "./TokenService";
import Service from './Service';

export class AuthService extends Component {
   service = new Service();

  login(username, password, rememberMe) {

    let loginDto = {
      email : username,
      password : password,
      rememberMe : true
    };

    let json = JSON.stringify(loginDto);

   
return this.service.post('https://localhost:7057/api/Account/Login', json)
.then(response => response.json())
    .then(data => {
      debugger;
      if (data.accessToken) {
              TokenService.setUser(data);
            }
            return data;
    } );
  }
  logout() {
    TokenService.removeUser();
  }
  getCurrentUser() {
    return TokenService.getUser();
  }
}
export default new AuthService();