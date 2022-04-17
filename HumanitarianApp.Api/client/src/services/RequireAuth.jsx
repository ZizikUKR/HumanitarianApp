import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({children}) => {
  const location = useLocation();
  const {admin} = useAuth();

  if (admin.login !=null && admin.password !=null) {
    return children;
  }

  return <Navigate to='/admin-login' state={{from: location}}/>
}

export default RequireAuth;