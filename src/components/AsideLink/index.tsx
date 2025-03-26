import Link from "next/link";
import styles from './AsideLink.module.css';

interface AsideLinkProps {
    children: React.ReactNode;
    href: string;
}

export const AsideLink = ({ children, href }: AsideLinkProps) => {
    return (
        <Link href={href} className={styles.asideLink}>
            {children}
        </Link>
    );
}