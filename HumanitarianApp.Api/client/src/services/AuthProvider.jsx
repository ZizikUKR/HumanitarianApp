import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [admin, setAdmin] = useState({login: '', password: ''});

  const signin = (newAdmin, cb) => {
    setAdmin(newAdmin);
    cb();
  }
  const signout = (cb) => {
    setAdmin({login: '', password: ''});
    cb();
  }

  const value = {admin, signin, signout}

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider;