import { Github } from '../ProviderLogin';
import styles from './Providers.module.css';

export const Providers = () => {
    return (
        <ul className={styles.providers}>
            <li>
                <Github />
            </li>
        </ul>
    );
}