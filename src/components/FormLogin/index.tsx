'use client';

import { FormEvent, useState } from 'react';
import styles from './FormLogin.module.css';
import { Label } from '../Label';
import { Input } from '../Input';
import { Button } from '../Button';
import { ArrowFoward } from '../icons/ArrowFoward';

export const FormLogin = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginAttempt = async (event: FormEvent) => {
        event.preventDefault();
        console.log('login?');
    }

    return (
        <form className={styles.form} onSubmit={loginAttempt}>
            <div>
                <Label>E-mail</Label>
                <Input 
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Digite seu e-mail'
                    required
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />
            </div>
            <div>
                <Label>Senha</Label>
                <Input 
                    name='password'
                    id='password'
                    type='password'
                    required
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                />
            </div>
            <div className={styles.action}>
                <Button type='submit'>Login <ArrowFoward /></Button>
            </div>
        </form>
    );
}