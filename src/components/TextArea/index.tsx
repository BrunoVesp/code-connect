import { TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.css';

export const TextArea = ({ ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <textarea {...rest} className={styles.textarea} />
    );
}