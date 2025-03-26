import { IAuthor } from "./IAuthor";
import { IPost } from "./IPost";

export interface IComment {
    id: number;
    text: string;
    createdAt: Date;
    updateAt: Date;
    authorId: number;
    author: IAuthor;
    postId: number;
    post: IPost;
    parentId: number;
    parent: Comment;
    children: IComment[];
}