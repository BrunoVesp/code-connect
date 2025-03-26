import { IComment } from "@/types/IComment";
import Image from "next/image";
import styles from './Comments.module.css';
import { Avatar } from "../Avatar";

interface CommentProps {
    comment: IComment;
}

export const Comments = ({ comment }: CommentProps) => {

    const imgSrc = comment.author.avatar ?? comment.author.image;

    return (
        <div className={styles.comment}>
            <Avatar author={comment.author} />
            <strong>@{comment.author.name}</strong>
            <p>{comment.text}</p>
        </div>
    );
}