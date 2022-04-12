import './adminLogin.scss';

const AdminLogin = () => {
  return (
    <form className="admin-login">
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
        <button className="admin-login__button">Enter</button>
      </div>
    </form>
  );
};

export default AdminLogin;