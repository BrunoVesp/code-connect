import { IAuthor } from "./IAuthor";

export interface ISession {
    sessionToken: string;
    userId: number;
    expires: Date;
    user: IAuthor;

    createdAt: Date;
    updatedAt: Date;
}