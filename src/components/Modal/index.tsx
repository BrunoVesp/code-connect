'use client';

import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from './Modal.module.css';
import { ModalHandles } from "@/types/ModalHandles";

interface ModalProps {
    children: React.ReactNode;
}

const Modal = forwardRef<ModalHandles, ModalProps>(( { children }, ref) => {

    const dialogRef = useRef<HTMLDialogElement>(null);

    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    }

    const openModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }

    useImperativeHandle(ref, () => {
        return {
            closeModal,
            openModal
        }
    })

    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <header className={styles.header}>
                <button onClick={closeModal} >X</button>
            </header>
            {children}
        </dialog>
    );
});

Modal.displayName = "Modal";

export default Modal;