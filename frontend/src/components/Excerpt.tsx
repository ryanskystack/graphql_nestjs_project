import React from "react";
import { Link } from "react-router-dom";
import '../style.css';
type Props = {
    post_id: number;
    title: string;
    excerpt: string;
};

const className = 'Article';
export default function Exerpt({ post_id, title, excerpt }: Props) {
    return (
        <div className={className}>
            <Link to={`/articles/${post_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className={`${className}__title`}>{title}</div>
            </Link>
            <div className={`${className}__description`}>{excerpt}</div>
        </div>
    )
};