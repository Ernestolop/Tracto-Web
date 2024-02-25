'use client';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BlogGrid } from '@/components';
import { entrys } from '@/seed';

export const BlogPagination = ({ entrysPerPage }) => {
    const [entryOffset, setEntryOffset] = useState(0);
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