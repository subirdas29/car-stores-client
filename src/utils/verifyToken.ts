import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string) => {
    return jwtDecode(token) as { role: string };
};
