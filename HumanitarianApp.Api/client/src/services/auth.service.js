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

   
return this.service.post(`${process.env.REACT_APP_API_URL}Account/Login`, json)
.then(response => response.json())
    .then(data => {
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