import { Link, useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import posts from "../lib/posts";

const BlogItem = () => {
    const { slug } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        const postItem = posts.find((p) => p.slug === slug);
        setPost(postItem || null);
    }, [slug]);

    return (
        post ? (
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        ) : (
            <p>Post not found!</p>
        )
    );
};

export default BlogItem;
