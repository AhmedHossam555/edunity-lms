import { AuthUser } from "./auth-user.interface";

export interface AuthResponse {

  success: boolean;

  message: string;

  user?: AuthUser;
}