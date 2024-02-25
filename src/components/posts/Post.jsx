import Image from "next/image";

const Post = ({ post }) => {
    return (
        <article class="post">
            <header>
                <Image
                    src={post.userPhoto}
                    alt={`Foto de perfil de ${post.username} en Instagram`}
                    width={300}
                    height={300}
                />
                <span>{post.username}</span>
            </header>
            <main>
                <p>{post.textContent}</p>
                <Image
                    src={post.userPhoto}
                    alt={`Imagen de la publicación ${post.id} en instagram`}
                    width={300}
                    height={300}
                />
            </main>
        </article>
    )
}

export default Post;