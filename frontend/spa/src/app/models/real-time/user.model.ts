import { UserRole } from './user-role.model';

export interface User {
    id: number;
    username: string;
    email: string;
    passwordHash?: string; // Usualmente no se expone en el frontend
    role: UserRole | string;
    createdAt: Date | string;
  }