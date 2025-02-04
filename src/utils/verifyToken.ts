import { jwtDecode, JwtPayload } from "jwt-decode";


export interface TUserPayload extends JwtPayload {
  id: string;
  email: string;
  role: string;
}


export const verifyToken = (token: string): TUserPayload => {
    return jwtDecode<TUserPayload>(token);
};