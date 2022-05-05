import React from "react";
import {Route, Routes} from "react-router-dom";
import {VOLUNTEERS_URL} from "shared/modules/url/publicUrl.const";
import {PublicNavigation} from "./PublicNavigation";
import {ADMIN_URL} from "shared/modules/url/adminUrl.const";
import {AdminRoute} from "routes/AdminRoute";
import Page404 from "shared/components/page-404/Page404";

export const AppNavigation = () => (
    <Routes>
        <Route path={VOLUNTEERS_URL}>
            {PublicNavigation}
        </Route>
        <Route path={ADMIN_URL} element={<AdminRoute/>}>
            <Route index/>
        </Route>
        <Route path="*" element={<Page404/>}/>
    </Routes>
)
