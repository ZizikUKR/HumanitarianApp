import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import AuthProvider from "./services/AuthProvider"

import './styles/app.scss';
import {PublicNavigation} from "./navigation/PublicNavigation";
import {AdminRoute} from "./routes/AdminRoute";

const App = () => (
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path={"*"} element={<PublicNavigation/>}/>
                    <Route path={"/adin"} element={<AdminRoute/>}>
                        <Route index/>
                    </Route>
                    {/*<Route path={"/test"} element={<Main/>}/>*/}
                    {/*    /!*<Route path="/" element={<PageLayout/>}>*!/*/}
                    {/*    <Route path={"/"} element={<VolunteerPage/>}/>*/}
                    {/*    /!*<PublicNavigation/>*!/*/}

                    {/*    /!*</Route>*!/*/}
                    {/*    /!*<Route path="/" element={<Main/>}/>*!/*/}
                    {/*    <Route path="/admin-login" element={<AdminLogin/>}/>*/}
                    {/*    <Route path="/admin-panel" element={// <RequireAuth>*/}
                    {/*        //   <AdminPanel />*/}
                    {/*        // </RequireAuth>*/}
                    {/*        <AdminPanel/>}/>*/}
                    {/*    <Route path="*" element={<Page404/>}/>*/}
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);


export default App;
