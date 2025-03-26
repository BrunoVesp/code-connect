import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    href?: string;
    outline?: boolean;
}


export const Button = ({ href, outline, children, ...rest }: ButtonProps) => {
    if (href) {
        return (
            <Link href={href} className={outline ? styles.outline : styles.btn}>
                {children}
            </Link>
        );
    }

    return (
        <button {...rest} className={outline ? styles.outline : styles.btn}>
            {children}
        </button>
    );
}