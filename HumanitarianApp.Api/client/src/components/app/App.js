import { Routes, Route } from "react-router-dom";

import Main from "../main/Main";
import AdminLogin from "../admin-login/AdminLogin";
import AdminPanel from "../admin-panel/AdminPanel";
import Page404 from "../page-404/Page404";

import './app.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-panel" element ={<AdminPanel />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;