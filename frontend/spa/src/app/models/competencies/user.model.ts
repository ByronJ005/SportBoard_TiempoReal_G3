export interface User {
    username: string;
    email: string;
    role: 'Coach' | 'Player';
    created_at: Date;
}
