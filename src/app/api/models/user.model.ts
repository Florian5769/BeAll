export interface UserModel {
    id: number;
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    role: 'Admin' | 'Subscriber';
    createdAt: Date;
    updatedAt: Date;
    token?: string;
    lastConnection?: Date;
    address?: string;
    gender?: 'Male' | 'Female';
    birthyear?: number;
    image?: string;
}