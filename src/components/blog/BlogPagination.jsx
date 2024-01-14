'use client';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BlogGrid } from '@/components';

const entrys = [
    {
        id: 1,
        title: "Esta es una novedad de tracto agro vial",
        preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate...",
        image: "/images/routetracto.jpg"
    },
    {
        id: 2,
        title: "Esta es una novedad de tracto agro vial",
        preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate...",
        image: "/images/routetracto.jpg"
    },
    {
        id: 3,
        title: "Esta es una novedad de tracto agro vial",
        preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate...",
        image: "/images/routetracto.jpg"
    },
    {
        id: 4,
        title: "Esta es una novedad de tracto agro vial",
        preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate...",
        image: "/images/routetracto.jpg"
    },
    {
        id: 5,
        title: "Esta es una novedad de tracto agro vial",
        preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate...",
        image: "/images/routetracto.jpg"
    },
    {
        id: 6,
        title: "Esta es una novedad de tracto agro vial",
        preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate...",
        image: "/images/routetracto.jpg"
    },
    {
        id: 7,
        title: "Esta es una novedad de tracto agro vial",
        preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate...",
        image: "/images/routetracto.jpg"
    },
    {
        id: 8,
        title: "Esta es una novedad de tracto agro vial",
        preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate...",
        image: "/images/routetracto.jpg"
    }
]

export const BlogPagination = ({ entrysPerPage }) => {
    const [entryOffset, setEntryOffset] = useState(0);
    //Aqui aplicar el fetch
    const endOffset = entryOffset + entrysPerPage;
    const currentEntryes = entrys.slice(entryOffset, endOffset);
    const pageCount = Math.ceil(entrys.length / entrysPerPage);

    const handlePageClick = e => {
        const newOffset = (e.selected * entrysPerPage) % entrys.length;
        setEntryOffset(newOffset);
    };

    return (
        <section className='entrys__page'>
            <header>
                <h2 className='entrys__heading'>Novedades</h2>
            </header>
            <main>
                <BlogGrid entrys={currentEntryes} />
            </main>
            <footer>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Siguiente >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< Anterior"
                    renderOnZeroPageCount={null}
                    className='pagination'
                    pageLinkClassName='pagination__item'
                    activeClassName='pagination__item--active'
                    previousClassName='pagination__button'
                    nextClassName='pagination__button'
                    previousLinkClassName='pagination__link'
                    nextLinkClassName='pagination__link'
                />
            </footer>
        </section>
    )
}