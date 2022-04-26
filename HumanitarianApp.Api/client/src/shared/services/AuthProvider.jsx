import React from "react";

export const AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {
    const [admin, setAdmin] = React.useState({login: '', password: ''});

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
