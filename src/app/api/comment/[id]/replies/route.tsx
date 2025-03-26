import { NextRequest } from "next/server";
import db from "../../../../../../prisma/db";

interface Params {
    params: {
        id: string;
    }
}

export async function GET (_request: NextRequest, { params }: Params) {
    const replies = db.comment.findMany({
        where: {
            parentId: parseInt(params.id)
        },
        include: {
            author: true
        }
    });
    return Response.json(replies);
}