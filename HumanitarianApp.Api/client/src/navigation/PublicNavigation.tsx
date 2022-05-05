import React from "react";
import { Route } from "react-router-dom";
import { VolunteersPage } from "../pages/VolunteersPage";
import {
    ADMIN_LOGIN_URL,
    ADVERTISEMENT_URL,
    ENTERPRISES_URL,
    VOLUNTEERS_URL,
    VOLUNTEER_URL,
    ORGANIZATION_URL

} from "../shared/modules/url/publicUrl.const";
import { AdminLoginPage } from "../pages/AdminLoginPage";
import { EnterprisesPage } from "../pages/EnterprisesPage";
import { AdvertisementPage } from "../pages/AdvertisementPage";
import { VolunteerPage } from "pages/VolunteerPage";
import { OrganizationPage } from "pages/OrganizationPage";

export const PublicNavigation = [
    <Route index key={VOLUNTEERS_URL} element={<VolunteersPage />} />,
    <Route path={ENTERPRISES_URL} key={ENTERPRISES_URL} element={<EnterprisesPage />} />,
    <Route path={ADVERTISEMENT_URL} key={ADVERTISEMENT_URL} element={<AdvertisementPage />} />,
    <Route path={ADMIN_LOGIN_URL} key={ADMIN_LOGIN_URL} element={<AdminLoginPage />} />,
    <Route path={VOLUNTEER_URL} key={VOLUNTEER_URL} element={<VolunteerPage />} />,
    <Route path={ORGANIZATION_URL} key={ORGANIZATION_URL} element={<OrganizationPage />} />
]


