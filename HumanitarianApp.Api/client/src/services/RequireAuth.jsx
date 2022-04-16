import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({children}) => {
  const location = useLocation();
  const {admin} = useAuth();

  if (admin.login === 'login'&& admin.password === 'password') {
    return children;
  }

  return <Navigate to='/admin-login' state={{from: location}}/>
}

export default RequireAuth;