import { Heading } from "@/components/Heading";
import { ArrowBack } from "@/components/icons/ArrowBack";
import Link from "next/link";
import styles from '@/app/error/Error.module.css';
import Image from "next/image";
import banner from "@/app/error/404.png";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <Image src={banner} alt="Not-Found" />
            <Heading>OPS!, Página não encontrada.</Heading>
            <p className={styles.text}>Você pode voltar ao feed e continuar buscando projetos incríveis</p>
            <Link href="/">Voltar ao feed <ArrowBack /></Link>
        </div>
        
    );
}