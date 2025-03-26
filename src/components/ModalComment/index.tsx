'use client';

import { useRef } from "react";
import { IconButton } from "../IconButton";
import { Chat } from "../icons/Chat";
import Modal from "../Modal";
import { ModalHandles } from "@/types/ModalHandles";
import { Subheading } from "../Subheading";
import { SubmitButton } from "../SubmitButton";
import styles from './ModalComment.module.css';
import { TextArea } from "../TextArea";

interface ModalCommentProps {
    action: (formData: FormData) => Promise<void>;
}

export const ModalComment = ({ action }: ModalCommentProps) => {
    const modalRef = useRef<ModalHandles>(null);

    return (
        <>
            <Modal ref={modalRef}>
                <form action={action} onSubmit={() => modalRef.current?.closeModal()}>
                    <Subheading>Deixe seu comentário sobre o post:</Subheading>
                    <TextArea required rows={8} name="text" placeholder="Digite aqui..." />
                    <div className={styles.footer}>
                        <SubmitButton>Comentar</SubmitButton>
                    </div>
                </form>
            </Modal>
            <IconButton onClick={() => modalRef.current?.openModal()}>
                <Chat />
            </IconButton>
        </>
    );
}