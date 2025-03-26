import { Author } from "./IAuthor";

export interface Account {
    userId: number;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string;
    access_token?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;

    createdAt: Date;
    updatedAt: Date;

    user: Author;
}