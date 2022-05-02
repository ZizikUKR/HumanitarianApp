import { Routes, Route } from "react-router-dom";

import Main from "../main/Main";
import AdminLogin from "../admin-login/AdminLogin";
import VolunteerCard from "../volunteer-card/VolunteerCard";
import AdminPanel from "../admin-panel/AdminPanel";
import Page404 from "../page-404/Page404";

import RequireAuth from "../../services/RequireAuth";
import AuthProvider from "../../services/AuthProvider";

import './app.scss';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/card/:id" element={<VolunteerCard />} />
        <Route path="/admin-panel" element={
          // <RequireAuth>
          //   <AdminPanel />
          // </RequireAuth>
          <AdminPanel />
        } />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;