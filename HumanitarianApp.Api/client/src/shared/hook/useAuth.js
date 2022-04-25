import {useContext} from "react";
import {AuthContext} from "../services/AuthProvider";

export function useAuth() {
    return useContext(AuthContext);
}
