import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
    return <input {...rest} className={styles.input} />

}