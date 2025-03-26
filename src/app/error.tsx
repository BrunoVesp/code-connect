'use client' // Error boundaries must be Client Components
 
import Image from 'next/image'
import { useEffect } from 'react'
import banner from './error/500.png';
import Link from 'next/link';
import { ArrowBack } from '@/components/icons/ArrowBack';
import { Heading } from '@/components/Heading';
import styles from './error/Error.module.css';
 
export default function Error({ error }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className={styles.container}>
       <Image src={banner} alt='Error'/>
       <Heading>Opa! Ocorreu um erro.</Heading>
       <p className={styles.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
       <Link href="/">
         Voltar ao feed <ArrowBack color='#81FE88'/>
       </Link>
     </div>
  )
}