import { IAuthor } from "@/types/IAuthor"
import { Avatar } from "../Avatar";

interface AuthorProps {
    author: IAuthor;
}

export const Author = ({ author }: AuthorProps) => {
    return (
        <ul>
            <li>
                <Avatar author={author} />
            </li>
            <li>
                @{author.name}
            </li>
        </ul>
    );
}