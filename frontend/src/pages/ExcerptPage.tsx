import React from "react";
import { useQuery } from "@apollo/client";

import FetchHolder from "../components/FetchHolder";
import { FiveMoreList, TenList } from "../generated/graphql";
import '../style.css';

import Excerpts from "../components/Excerpts";
import FiveMoreExcerpts from "../components/FiveMoreExcerpts";

type Props = {
    isFiveMore: boolean;
};

export default function ExcerptPage({ isFiveMore }: Props) {
    let queryMethod = TenList;

    if (isFiveMore === true) {
        queryMethod = FiveMoreList;
    }

    const { data, error, loading } = useQuery(queryMethod);

    return (
        <div>            
            <FetchHolder data={data} error={error} loading={loading}>

                {!isFiveMore ?
                    (<Excerpts data={data} />) :
                    (<FiveMoreExcerpts data={data} />)}
            </FetchHolder>
        </div>
    );
}