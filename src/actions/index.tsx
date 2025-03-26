'use server';

import { IPost } from "@/types/IPost";
import db from "../../prisma/db";
import { revalidatePath } from "next/cache";
import { IComment } from "@/types/IComment";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export async function incrementThumbsUp(post: IPost) {

    //await new Promise((resolve) => setTimeout(resolve, 3500));

    await db.post.update({
        where: {
            id: post.id
        },
        data: {
            likes: {
                increment: 1
            }
        }
    });
    revalidatePath("/");
    revalidatePath(`${post.slug}`);
}

export async function postComment(post: IPost, formData: FormData) {
    // const author = await db.user.findFirst({
    //     where: {
    //         username: 'anabeatriz_dev'
    //     }
    // });

    const session = await getServerSession(options);

    if (!session?.user) {
        throw new Error("Autor não encontrado");
    }

    await db.comment.create({
        data: {
            text: formData.get('text') as string,
            authorId: session.user.id,
            postId: post.id
        }
    });
    revalidatePath("/");
    revalidatePath(`${post.slug}`);
}

export async function postReply(parent: IComment, formData: FormData) {
    // const author = await db.user.findFirst({
    //     where: {
    //         username: 'anabeatriz_dev'
    //     }
    // });

    const session = await getServerSession(options);

    const post = await db.post.findFirst({
        where: {
            id: parent.postId
        }
    });

    if (!session) {
        throw new Error("Autor não encontrado");
    }

    if (!post) {
        throw new Error("Post não encontrado");
    }

    await db.comment.create({
        data: {
            text: formData.get('text') as string,
            authorId: session.user.id,
            postId: post?.id,
            parentId: parent.parentId ?? parent.id
        }
    });
    revalidatePath(`${post?.slug}`);
}

export async function createUser(formData: FormData) {
    try {
        console.log("Iniciando cadastro de usuário");
        const hashedPassword = bcrypt.hashSync(formData.get('password') as string ?? "" , 10);

        await db.user.create({
            data: {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                password: hashedPassword
            }
        });
        console.log("Cadastro finalizado");

    } catch (error) {
        console.log("Falha ao criar usuário =>", error);
        return;
    }
    redirect('/signin');
}