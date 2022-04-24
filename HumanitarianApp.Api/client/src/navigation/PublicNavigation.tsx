import React from "react";
import {Route} from "react-router-dom";
import {VolunteerPage} from "../pages/VolunteerPage";
import AdminLogin from "../components/admin-login/AdminLogin";
import {ADMIN_LOGIN_URL, PUBLIC_URL} from "../modules/url/publicUrl.const";

export const PublicNavigation = [
    <Route index key={PUBLIC_URL} element={<VolunteerPage/>}/>,
    <Route path={ADMIN_LOGIN_URL} key={ADMIN_LOGIN_URL} element={<AdminLogin/>}/>
]


