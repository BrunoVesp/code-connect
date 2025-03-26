import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

    export const CheckBox = ({label, ...rest }: CheckboxProps) => {
    return (
    <label className={styles.container}>
        <input 
            type="checkbox" 
            {...rest} 
            className={styles.checkbox} 
        />
        {label}
    </label>
    );
}