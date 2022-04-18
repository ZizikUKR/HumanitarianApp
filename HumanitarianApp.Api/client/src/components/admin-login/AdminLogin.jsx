import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

import './adminLogin.scss';
import AuthService from '../../services/auth.service.js';

const loginData ={
  login:'',
  password:'',
  rememberMe: false
}

const onInputLogin = e => {
  const key = e.target.name;
  let value = e.target.value;
  if (key === 'category') {
    value = +value;
  }

 return loginData.login=value;
}

const onInputPassword = e => {
  const key = e.target.name;
  let value = e.target.value;
  if (key === 'category') {
    value = +value;
  }
  
  return loginData.password=value;
}

const onCheck = e => {
  const key = e.target.checked; 
  return loginData.rememberMe=key;
}

  const onLogIn = ()=>{
 let service = new AuthService();

  service.login(loginData.login, loginData.password, loginData.rememberMe);
  } 

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {signin} = useAuth();

  const fromPage = location.state?.from?.pathname || '/admin-panel';

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const admin = {
      login: form.login.value,
      password: form.password.value
    }

    signin(admin, () => navigate(fromPage, {replace: true}));
  }

  return (
    <form className="admin-login" onSubmit={handleSubmit}>
      <div className="admin-login__block">
        <label className="admin-login__label" htmlFor="login">Login</label>
        <input className="admin-login__input" name="login" id="login" type="text" />
      </div>
      <div className="admin-login__block">
        <label className="admin-login__label" htmlFor="password">Password</label>
        <input className="admin-login__input" name="password" id="password" type="password" />
      </div>
      <div className="admin-login__submit">
        <input className="admin-login__checkbox" name="check" id="check" type="checkbox" />
        <label className="admin-login__label" htmlFor="check">Check me out</label>
        <button className="admin-login__button" type='submit'>Enter</button>
      </div>
    </form>
  );
};

export default AdminLogin;