import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from 'react-router-dom';
import FetchHolder from "../components/FetchHolder";
import { GetPostById } from "../generated/graphql";

import '../style.css';
import Article from "../components/Article";


export default function ArticlePage() {
  const { post_id } = useParams<{ post_id: string }>();
  const { data, error, loading } = useQuery(GetPostById, {
    variables: { post_id: post_id },
  });

  console.log("post_id", post_id);

  return (
    <div >     
      <FetchHolder data={data} error={error} loading={loading}>
        <Article data={data} />
      </FetchHolder>
    </div>
  );
}


