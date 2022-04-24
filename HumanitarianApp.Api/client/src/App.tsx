import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import AuthProvider from "./services/AuthProvider"
import {PublicNavigation} from "./navigation/PublicNavigation";
import {AdminRoute} from "./routes/AdminRoute";
import Page404 from "./components/page-404/Page404";
import './styles/app.scss';
import {PUBLIC_URL} from "./modules/url/publicUrl.const";
import {ADMIN_URL} from "./modules/url/adminUrl.const";

const App = () => (
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path={PUBLIC_URL}>
                        {PublicNavigation}
                    </Route>
                    <Route path={ADMIN_URL} element={<AdminRoute/>}>
                        <Route index/>
                    </Route>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

export default App;
