import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from 'react-router-dom';
import FetchHolder from "../components/FetchHolder";
import { GetPostById } from "../generated/graphql";

import '../style.css';
import Article from "../components/Article";


export default function ArticlePage() {
  const { post_id } = useParams<{ post_id: string }>();
  var postId=parseInt(post_id)
  console.log("postId", postId);
  console.log('useParams post_id type:', typeof postId)
  const { data, error, loading } = useQuery(GetPostById, {
    variables: { post_id: postId },
  });


  // console.log("GetPostById data", data);
  // console.log("GetPostById error", error);
  return (
    <div >     
      <FetchHolder data={data} error={error} loading={loading}>
        <Article data={data} />
      </FetchHolder>
    </div>
  );
}


