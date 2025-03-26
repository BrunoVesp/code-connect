import { IComment } from "@/types/IComment";
import { Comments } from "../Comments";
import styles from './CommentList.module.css';
import { Replies } from "../Replies";
import { ModalReply } from "../ModalReply";

interface CommentListProps {
    comments: IComment[];
}

export const CommentList = ({ comments }: CommentListProps) => {
    return (
        <section className={styles.comments}>
            <h2>Comentários</h2>
            <ul>
                {comments.map(comment => <li key={comment.id}>
                    <Comments comment={comment} key={comment.id} />
                    <ModalReply comment={comment} />
                    <Replies comment={comment} />
                </li>)}
            </ul>
        </section>
    );
}