import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import { IPost } from "@/types/IPost";
import Link from "next/link";
import styles from './Page.module.css';
import db from "../../../prisma/db";

interface ApiResponse {
  data: IPost[];
  prev?: number | null;
  next?: number | null;
}

interface HomeProps {
  searchParams: {
    page?: string;
    q: string;
  }
}

async function getAllPosts(page: number, searchTerm: string): Promise<ApiResponse> {
  try {

    const where: { title?: { contains: string; mode: 'insensitive' } } = {};
  
    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: 'insensitive'
      }
    }

    const perPage = 6;
    const skip = (page - 1) * perPage;
    const totalItems = await db.post.count({ where });
    const totalPages = Math.ceil(totalItems / perPage);
    const next = page < totalPages ? page + 1 : null;
    const prev = page > 1 ? page - 1 : null;

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      orderBy: { id: "desc" },
      include: {
        author: true,
        comment: {
          include: {
            author: true
          }
        }
      }
    });

    return { data: posts as unknown as IPost[], prev, next };

  } catch (error) {
    logger.error("Não foi possível buscar os posts", error);
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const currentPage = parseInt(searchParams?.page || "1", 10) || 1;
  const searchTerm = searchParams?.q;
  const { data: posts, prev, next } = await getAllPosts(currentPage, searchTerm);

  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost post={post} key={post.id} />)}
      <div className={styles.links}>
        {prev && <Link href={{ pathname: '/', query: { page: prev, q: searchTerm } }}>Página anterior</Link>}
        {next && <Link href={{ pathname: '/', query: { page: next, q: searchTerm } }}>Próxima página</Link>}
      </div>
    </main>
  );
}
