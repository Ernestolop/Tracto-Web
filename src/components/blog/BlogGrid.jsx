import Image from "next/image";
import Link from "next/link";

export const BlogGrid = ({ entrys }) => {
    return (
        <div className="entrys">
            {entrys.map(entry => (
                <article className="entry" key={entry.id}>
                    <header className="entry__head">
                        <Image className="entry__photo"
                            src={entry.image}
                            alt={entry.title}
                            width={300}
                            height={300}
                        />
                        <h2 className="entry__title">{entry.title}</h2>
                    </header>
                    <main className="entry__main">
                        <p className="entry__preview">{entry.preview}</p>
                        <Link className="entry__readmore" href='/blog'>Leer más</Link>
                    </main>
                </article>
            ))}
        </div>
    )
}

