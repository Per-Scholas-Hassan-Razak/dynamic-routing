const BlogItem = ({post}) => {


    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.slug}</p>
            <p>{post.content}</p>
        </div>

    )
}

export default BlogItem