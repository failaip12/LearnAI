import { jwtDecode } from 'jwt-decode';
export const getUserIDFromJWT = (jwt: string): string => {
    const decodedJWT: any = jwtDecode(jwt);
    return decodedJWT['_id'];
  };