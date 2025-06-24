import { Model } from "mongoose";

export type TUser = {
    name: string;
    email: string;
    image?: string;
    password: string;
    role: 'user' | 'admin';
    isDeleted?: boolean;
}

export interface User extends Model<TUser>{
    isUserExists(id: string): Promise<TUser | null>
}