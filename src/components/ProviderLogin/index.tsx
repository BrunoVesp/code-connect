import Image from 'next/image';
import { IconButton } from '../IconButton';
import githubImg from './github.png';
import { ButtonHTMLAttributes } from 'react';

export const Github = ({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <IconButton {...rest}>
            <Image src={githubImg} alt='Github Logo' />
        </IconButton>
    );
}