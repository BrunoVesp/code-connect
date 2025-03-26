import { Account } from "./IAccount";
import { IComment } from "./IComment";
import { IPost } from "./IPost";
import { ISession } from "./ISession";

export interface IAuthor {
    post?: IPost[];
    comments?: IComment[];
    id: number;
    name?: string;
    username?: string;
    avatar?: string;
    email?: string;    
    emailVerified?: Date;
    image?: String;
    account: Account[];
    session: ISession[];
}
