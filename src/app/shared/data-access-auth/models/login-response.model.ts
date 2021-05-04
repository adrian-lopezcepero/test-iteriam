import { User } from '../../util';

export interface LoginResponse {
    token: string;
    email: string;
    password: string;
}