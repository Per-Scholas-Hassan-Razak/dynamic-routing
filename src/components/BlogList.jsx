import BlogItem from "./BlogItem";
import posts from "../lib/posts";
import { useState } from "react";
import {Link} from 'react-router-dom'

const BlogList = () => {
  const [blogPosts] = useState(posts);

  console.log(blogPosts);
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blogs/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
