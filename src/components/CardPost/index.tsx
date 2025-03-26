import Image from "next/image";
import { Avatar } from "../Avatar";
import { IPost } from "@/types/IPost";
import styles from './CardPost.module.css';
import Link from "next/link";
import { incrementThumbsUp, postComment } from "@/actions";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { ModalComment } from "../ModalComment";
import { Author } from "../Author";

interface CardPostProps {
    post: IPost;
    highlight?: boolean;
}

export const CardPost = ({ post, highlight }: CardPostProps) => {

    const submitThumbsUp = incrementThumbsUp.bind(null, post);
    const submitComment = postComment.bind(null, post);

    return (
        <article className={styles.card} style={{ width: highlight ? 993 : 486 }} >
            <header className={styles.header}>
                <figure style={{ height: highlight ? 300 : 133 }}>
                    <Image
                        src={post.cover}
                        alt={`Capa do post do título: ${post.title}`}
                        fill
                        sizes="fill"
                    />
                </figure>
            </header>
            <section className={styles.body}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link className={styles.link} href={`/posts/${post.slug}`}>Ver Detalhes</Link>
            </section>
            <footer className={styles.footer}>
                <div className={styles.actions}>
                    <form action={submitThumbsUp}>
                        <ThumbsUpButton />
                        <p>{post.likes}</p>
                    </form>
                    <div>
                        <ModalComment action={submitComment} />
                        <p>{post.comment.length}</p>
                    </div>
                </div>
                <Author author={post.author} />
            </footer>
        </article>
    );
}