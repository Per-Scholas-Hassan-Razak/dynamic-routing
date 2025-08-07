import { Link, useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import posts from "../lib/posts";

const BlogItem = () => {
  const { slug } = useParams(); 

  const [post, setPost] = useState({})

  useEffect(() => {
    const postItem = posts.find((p) => p.slug === slug);
    setPost(postItem)
  },[])

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogItem;
