import { PostCard } from "../PostCard";
import "./styles.css";

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard {...post} key={post.id} />
      ))}
    </div>
  );
};
