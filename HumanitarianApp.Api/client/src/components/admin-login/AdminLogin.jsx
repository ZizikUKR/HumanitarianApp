import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

import './adminLogin.scss';
import { AuthService } from '../../services/auth.service.js';

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  let service = new AuthService();

  const fromPage = location.state?.from?.pathname || '/admin-panel';

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const admin = {
      login: form.login.value,
      password: form.password.value
    }

    let tokens = await service.login(form.login.value, form.password.value);

    if (tokens.accessToken != null && tokens.refreshToken != null) {

      signin(admin, () => navigate(fromPage, { replace: true }));
      
    }
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