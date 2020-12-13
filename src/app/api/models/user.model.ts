export interface UserModel {
    id?: number;
    email?: string;
    username?: string;
    firstname?: string;
    lastname?: string;
    roles?: 'admin' | 'user' | 'moderator';
    createdAt?: Date;
    updatedAt?: Date;
    token?: string;
    password?:string;
    lastConnection?: Date;
    address?: string;
    gender?: 'Male' | 'Female';
    birthyear?: number;
    image?: string;
    subscribe?:boolean;
    plan?:number;
}