import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styles from './IconButton.module.css';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const IconButton = ({ children, ...rest }: IconButtonProps) => {
    return (
        <button {...rest} className={styles.btn}>
            {children}
        </button>
    );
}