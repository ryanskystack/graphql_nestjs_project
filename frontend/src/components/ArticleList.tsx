import { useQuery } from "@apollo/client";
import React from "react";
import FetchHolder from "../components/FetchHolder";
import List from "../components/List";
import { ArticlesList } from "../generated/graphql";

import '../style.css';
type Props = {
  setIsFiveMore: any;
};
const className = 'ArticleList';
export default function ArticleList({setIsFiveMore}:Props) {
  const { data, error, loading } = useQuery(ArticlesList);
  return (
    <div className={className}>
      <h3>Articles</h3>
      <p style={{cursor:'pointer'}}
      onClick={() => setIsFiveMore(true)}
      >Five More</p>
      <FetchHolder data={data} error={error} loading={loading}>
        <List data={data} />
      </FetchHolder>
    </div>
  );
}