'use client';
// Import Swiper React components
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export const Carrousel = ({ images }) => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image.url}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className='hero'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
