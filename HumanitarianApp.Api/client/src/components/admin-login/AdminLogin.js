import './adminLogin.scss';
import {AuthService} from '../../services/auth.service.js';

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
  return (
    <form className="admin-login">
      <div className="admin-login__block">
        <label className="admin-login__label" htmlFor="login">Login</label>
        <input className="admin-login__input" name="login" id="login" type="text" onChange={e => onInputLogin(e)}/>
      </div>
      <div className="admin-login__block">
        <label className="admin-login__label" htmlFor="password">Password</label>
        <input className="admin-login__input" name="password" id="password" type="password" onChange={e => onInputPassword(e)}/>
      </div>
      <div className="admin-login__submit">
        <input className="admin-login__checkbox" name="check" id="check" type="checkbox" onChange={e => onCheck(e)} />
        <label className="admin-login__label" htmlFor="check">Check me out</label>
        <button className="admin-login__button" onClick={()=>onLogIn()}>Enter</button>
      </div>
    </form>
  );
};

export default AdminLogin;