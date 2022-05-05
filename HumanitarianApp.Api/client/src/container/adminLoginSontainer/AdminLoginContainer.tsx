import React, {FormEvent} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "shared/hook/useAuth";
import AuthService from "shared/services/auth.service";
import AdminLoginComponent from "shared/components/admin-login/AdminLogin";

export const AdminLoginContainer = () => {
    const navigate = useNavigate();
    const location: any = useLocation();
    const {signin} = useAuth() as any;
    let service = new AuthService();

    const fromPage = location.state?.from?.pathname || '/admin-panel';

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form: any = e.target;
        const admin = {
            login: form.login.value,
            password: form.password.value
        }

        let tokens = await service.login(form.login.value, form.password.value);

        if (tokens.accessToken != null && tokens.refreshToken != null) {
            signin(admin, () => navigate(fromPage, {replace: true}));
        }
    }

    return (
        <AdminLoginComponent handleSubmit={handleSubmit}/>
    );
}
