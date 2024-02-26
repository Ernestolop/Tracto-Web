import { Post } from "@/components"

export const PostsGrid = ({ posts }) => {
    return (
        <div className="posts">
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

