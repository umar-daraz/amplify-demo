import { Link } from "react-router-dom";

export default function PostItem({ post, onDelete }) {
  return (
    <div className="border-b-2 border-indigo-500 flex flex-row space-x-8 justify-between">
      <h1>{post.title}</h1>
      <div>
        <Link to={`/posts/${post.id}`} className="mr-2">
          View
        </Link>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
