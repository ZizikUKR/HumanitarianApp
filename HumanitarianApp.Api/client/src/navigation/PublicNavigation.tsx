import React from "react";
import {Route, Routes} from "react-router-dom";
import {VolunteerPage} from "../pages/VolunteerPage";

export const PublicNavigation = () => (
    <Routes>
        <Route path="/" element={<VolunteerPage/>}/>
    </Routes>
)

