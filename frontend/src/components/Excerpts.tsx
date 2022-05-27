import React from "react";
import Excerpt from "./Excerpt";
import '../style.css';



type Props = {
  data: {
    getTenPosts: any[];
  };
};


export default function Excerpts({ data }: Props) {
  const { getTenPosts } = data;

  return (
    <>
    <h4 style={{ textAlign: 'center' }}>The 10 latest articles:</h4>
      {getTenPosts.map((post: any) => (
        <Excerpt key={post.post_id + post.title} title={post.title} post_id={post.post_id} excerpt={post.excerpt} />
      ))}
    </>
  );
}

