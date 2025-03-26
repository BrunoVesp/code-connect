import { LabelHTMLAttributes } from 'react';
import styles from './Label.module.css';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
}

export const Label = ({ children, ...rest }: LabelProps) => {
    return (
        <label
            className={styles.label}
            {...rest}
        >
            {children}
        </label>
    );
}