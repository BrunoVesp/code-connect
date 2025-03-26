'use client';

import { useFormStatus } from "react-dom";
import { IconButton } from "../IconButton";
import { ThumbsUp } from "../icons/ThumbsUp";
import { Spinner } from "../Spinner";

export const ThumbsUpButton = () => {
    const { pending } = useFormStatus();

    return (
        <IconButton disabled={pending}>
            {pending ? <Spinner /> : <ThumbsUp />}
        </IconButton>
    );
}