import styles from './Subheading.module.css';

interface SubheadingProps {
    children: React.ReactNode;
}

export const Subheading = ({ children }: SubheadingProps) => {
    return <h2 className={styles.subheading}>{children}</h2>
}