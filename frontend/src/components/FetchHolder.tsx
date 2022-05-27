import React from "react";

type Props = {
  data: any;
  error: any;
  loading: boolean;
  children: React.ReactNode;
};

export default function FetchHolder({ children, data, error, loading }: Props) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <>{children}</>;
}