import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import { remark } from "remark";
import html from 'remark-html';
import styles from './Page.module.css';
import { redirect } from "next/navigation";
import { IPost } from "@/types/IPost";
import { CommentList } from "@/components/CommentList";
import db from "prisma/db";

interface PagePostProps {
    params: {
        slug: string;
    };
}

async function getPostBySlug(slug: string) {
    try {
        const post = await db.post.findFirst({
            where: {
                slug
            },
            include: {
                author: true,
                comment: {
                    include: {
                        author: true,
                        children: {
                            include: {
                                author: true
                            }
                        }
                    },
                    where: {
                        parentId: null
                    }
                }
            }
        });

        if (!post) {
            throw new Error(`Post com o slug ${slug} não foi encontrado`)
        }

        const processedContent = await remark()
            .use(html)
            .process(post?.markdown);
        const contentHtml = processedContent.toString();

        post.markdown = contentHtml;

        return post as unknown as IPost;
    } catch (error) {
        logger.error('Falha ao obter o post com o slug: ', { slug, error });
    }
    redirect('/not-found');
}

async function PagePost({ params }: PagePostProps) {
    const slug = params.slug;
    const post = await getPostBySlug(slug);

    return (
        <>
            <CardPost post={post} key={post.id} highlight />
            <h3 className={styles.subtitle}>Código:</h3>
            <div className={styles.code}>
                <div dangerouslySetInnerHTML={{ __html: post.markdown }} style={{ color: 'white' }} />
            </div>
            <div>
                <h2>Comentários</h2>
                <CommentList comments={post.comment} />
            </div>
        </>
    );
}

export default PagePost;