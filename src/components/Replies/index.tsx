'use client';

import { useEffect, useState } from 'react';
import styles from './Replies.module.css';
import { IComment } from '@/types/IComment';
import { Comments } from '../Comments';
import { ModalReply } from '../ModalReply';

interface RepliesProps {
    comment: IComment;
}

export const Replies = ({ comment }: RepliesProps) => {
    const [showReplies, setShowReplies] = useState<boolean>(false)

    async function fetchData() {
        const response = await fetch(`/api/comment/${comment.id}/replies`);
        const data = await response.json();
    }

    useEffect(() => {
        if (showReplies) {
            fetchData();
        }
    }, [showReplies]);

    return (
        <div className={styles.container}>
            <div className={styles.replies}>
                <button
                    className={styles.btn}
                    onClick={() => setShowReplies(!showReplies)}
                >
                    {showReplies ? 'Ocultar' : 'Ver'} respostas
                </button>
                {showReplies && <ul>
                    {comment.children.map(reply => <li key={reply.id}>
                        <Comments comment={reply} />
                        <ModalReply comment={reply} />
                    </li>)}
                </ul>}
            </div>
        </div>
    );
}