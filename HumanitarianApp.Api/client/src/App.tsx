import {BrowserRouter} from "react-router-dom";
import React from 'react';
import AuthProvider from "./shared/services/AuthProvider"
import './styles/app.scss';
import "./styles/app.scss";
import {AppNavigation} from "./navigation/Navigation";

const App = () => (
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <AppNavigation/>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

export default App;
