'use client';

import { useRef } from "react";
import Modal from "../Modal";
import styles from './ModalReply.module.css';
import { Comments } from "../Comments";
import { IComment } from "@/types/IComment";
import { IPost } from "@/types/IPost";
import { TextArea } from "../TextArea";
import { SubmitButton } from "../SubmitButton";
import { postReply } from "@/actions";
import { ModalHandles } from "@/types/ModalHandles";

interface ModalReplyProps {
    comment: IComment;
    post?: IPost;
}

export const ModalReply = ({ comment, post }: ModalReplyProps) => {
    const modalRef = useRef<ModalHandles>(null);

    const openModal = () => {
        modalRef.current?.openModal();
    }

    const action = postReply.bind(null, comment);

    return (
        <>
            <Modal ref={modalRef}>
                <form action={action}>
                    <div className={styles.body}>
                        <Comments comment={comment} />
                    </div>
                    <div className={styles.divider}></div>
                    <TextArea required rows={8} name="text" placeholder="Digite aqui..." />
                    <div className={styles.footer}>
                        <SubmitButton>Responder</SubmitButton>
                    </div>
                </form>
            </Modal>
            <button 
                className={styles.btn} 
                onClick={openModal}
            >
                Responder
            </button>
        </>
    );
}