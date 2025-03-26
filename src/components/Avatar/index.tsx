import Image from "next/image";
import styles from './Avatar.module.css';
import { IAuthor } from "@/types/IAuthor";

interface AvatarProps {
    author: IAuthor;
}

export const Avatar = ({ author }: AvatarProps) => {
    const imgSrc = author.avatar ?? author.image;

    return (
        <div className={styles.container}>
            {imgSrc &&
                <Image
                    src={String(imgSrc)}
                    alt={`Avatar do(a) ${author.name}`}
                    width={32}
                    height={32}
                />
            }
        </div>
    );
}