import styles from './TextDivider.module.css';

interface TextDividerProps {
    text: string;
}

export const TextDivider = ({ text }: TextDividerProps) => {
    return <hr className={styles.divider} data-text={text} />
}