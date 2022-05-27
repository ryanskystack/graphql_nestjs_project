import React from "react";
import { useQuery } from "@apollo/client";

import FetchHolder from "../components/FetchHolder";
import { TenList } from "../generated/graphql";
import '../style.css';

import Excerpts from "../components/Excerpts";

export default function ExcerptPage() {
    let queryMethod = TenList;

    const { data, error, loading } = useQuery(queryMethod);

    return (
        <div>            
            <FetchHolder data={data} error={error} loading={loading}>
              <Excerpts data={data} />
            </FetchHolder>
        </div>
    );
}