'use client';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { PostsGrid } from '@/components';
import { getPosts } from '@/actions';

export const SocialMedia = ({ postsPerPage }) => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsData = await getPosts();
                setPosts(postsData);
                setPageCount(Math.ceil(postsData.length / postsPerPage));
            } catch (error) {
                console.error('Error al obtener los posts:', error);
            }
        };

        fetchPosts();
    }, [postsPerPage]);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    return (
        <section className='posts__page'>
            <header>
                <h2 className='posts__heading'>Novedades</h2>
            </header>
            <main>
                <PostsGrid posts={currentPosts} />
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
    );
};
