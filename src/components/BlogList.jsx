import BlogItem from './BlogItem'
import posts from '../lib/posts'
import {useState} from 'react'

const  BlogList = () => {

    const [blogPosts, setBlogPosts] = useState(posts)

    console.log(blogPosts)
    return (
        <div>
            <h1>Blog  Posts</h1>
            <ul>

            {blogPosts.map((post) => 
                <BlogItem key={post.id} post={post}/>
            )}
            </ul>
        </div>
    )
}

export default BlogList