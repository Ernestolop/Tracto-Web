import Image from "next/image";
import Link from "next/link";

export const Post = ({ post }) => {

    const { id, owner, caption, media_url, permalink, media_type } = post;

    return (
        <article className="post">
            <header className="post__header">
                <Image
                    className="post__user-photo"
                    src={owner.profile_picture_url}
                    alt={`Foto de perfil de ${owner.username} en Instagram`}
                    width={50}
                    height={50}
                />
                <span
                    className="post__user-name"
                >{owner.username}</span>
            </header>
            <main>
                <Link
                    className="post__link"
                    href={permalink} prefetch={false} target="_blank" rel="noopener noreferrer"
                >
                    <p
                        className="post__caption"
                    >{caption}</p>
                    {
                        media_type === "VIDEO" ? (
                            <iframe
                                className="post__video"
                                title={`Video de la publicación ${id} en instagram`}
                                loading="lazy"
                                width={300}
                                height={300}
                                src={media_url}
                            />
                        ) : (
                            <Image
                                className="post__photo"
                                src={media_url}
                                alt={`Imagen de la publicación ${id} en instagram`}
                                width={300}
                                height={300}
                            />
                        )
                    }
                </Link>
            </main>
        </article>
    )
}