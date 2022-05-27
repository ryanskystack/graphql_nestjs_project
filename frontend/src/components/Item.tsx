import React from "react";
import '../style.css';

const className = 'ArticleList';

type Props = {
  title: string;
};

export default function Item({ title }: Props) {
  return <div className={`${className}__item`}>{title}</div>;
}