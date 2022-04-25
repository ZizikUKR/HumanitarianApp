import React from "react";
import {Route} from "react-router-dom";
import {VolunteerPage} from "../pages/VolunteerPage";
import {ADMIN_LOGIN_URL, PUBLIC_URL} from "../shared/modules/url/publicUrl.const";
import {AdminLoginPage} from "../pages/AdminLoginPage";

export const PublicNavigation = [
    <Route index key={PUBLIC_URL} element={<VolunteerPage/>}/>,
    <Route path={ADMIN_LOGIN_URL} key={ADMIN_LOGIN_URL} element={<AdminLoginPage/>}/>
]


