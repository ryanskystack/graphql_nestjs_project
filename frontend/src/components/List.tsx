import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import '../style.css';

const className = 'ArticleList';

type Props = {
    data: {
        getAllPosts: any[];
    };
};

export default function List({ data }: Props) {
    const { getAllPosts } = data;

    return (
        <>
            <ol className={`${className}__list`}>
                {getAllPosts.map((post: any) => (                    
                    <Link to={`/articles/${post.post_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <Item key={post.post_id+post.title+'c'} title={post.title} />
                    </Link>
                ))}
            </ol>
        </>
    );
}