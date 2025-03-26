'use client';

import { useFormStatus } from "react-dom";
import { Button } from "../Button";
import { Spinner } from "../Spinner";
import { ArrowFoward } from "../icons/ArrowFoward";

interface SubmitButtonProps {
    children: React.ReactNode
}

export const SubmitButton = ({ children }: SubmitButtonProps) => {
    const { pending } = useFormStatus();
    return (
        <Button aria-disabled={pending} type="submit">
            {pending ? <Spinner /> : <>{children} <ArrowFoward /></>}
        </Button>
    );
}