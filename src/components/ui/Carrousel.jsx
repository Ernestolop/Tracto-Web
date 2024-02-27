'use client';
// Import Swiper React components
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export const Carrousel = ({ images }) => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <div className='carrousel__content mw-950'>
                    <div className='carrousel__slogan'>
                        <h1 className='carrousel__heading'>SU MEJOR ALIADO <span className='carrousel__heading carrousel__heading--primary'>PARA EL CAMPO</span></h1>
                        <p className='carrousel__text'>Encontrá todo lo que necesites para equipar tu campo</p>
                    </div>
                </div>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image.url}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className='hero'
                            style={{
                                objectPosition: image.objectPosition,
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
