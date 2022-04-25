import {Route, Routes} from "react-router-dom";
import {VOLUNTEER_URL} from "../shared/modules/url/publicUrl.const";
import {PublicNavigation} from "./PublicNavigation";
import {ADMIN_URL} from "../shared/modules/url/adminUrl.const";
import {AdminRoute} from "../routes/AdminRoute";
import Page404 from "../components/page-404/Page404";
import React from "react";

export const AppNavigation=()=>(
    <Routes>
        <Route path={VOLUNTEER_URL}>
            {PublicNavigation}
        </Route>
        <Route path={ADMIN_URL} element={<AdminRoute/>}>
            <Route index/>
        </Route>
        <Route path="*" element={<Page404/>}/>
    </Routes>
)
