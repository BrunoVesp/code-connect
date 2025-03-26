import { IAuthor } from './IAuthor';
import { IComment } from "./IComment";

export interface IPost {
    id: number;
    cover: string;
    title: string;
    slug: string;
    body: string;
    markdown: string;
    createdAt: Date;
    updatedAt: Date;
    likes: number;
    authorId: number;
    author: IAuthor;
    comment: IComment[];
}