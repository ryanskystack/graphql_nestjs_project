import Excerpt from "./Excerpt";
import '../style.css';



type Props = {
  data: {
    getFiveMorePosts: any[];
  };
};


export default function FiveMoreExcerpts({ data }: Props) {
  const { getFiveMorePosts } = data;

  return (
    <>
    <h4 style={{ textAlign: 'center' }}>The 5 More latter articles:</h4>
      {getFiveMorePosts.map((post: any) => (
        <Excerpt key={post.post_id + post.title+'1'} title={post.title} post_id={post.post_id} excerpt={post.excerpt} />
      ))}
    </>
  );
};

