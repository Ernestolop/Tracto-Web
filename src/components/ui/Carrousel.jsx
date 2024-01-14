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
                    <article className='exchange'>
                        <div className='exchange__content'>
                            <header className='exchange__header'>
                                <h6 className='exchange__heading'>COTIZACIÓN DE MONEDAS</h6>
                            </header>
                            <main className='exchange__main'>
                                <table className='exchange__table'>
                                    <thead className='exchange__thead'>
                                        <tr className='exchange__tr'>
                                            <th className='exchange__td exchange__td--th'>Moneda</th>
                                            <th className='exchange__td exchange__td--th'>Compra</th>
                                            <th className='exchange__td exchange__td--th'>Venta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='exchange__tr'>
                                            <td className='exchange__td exchange__td--border'>Dólar<span className='exchange__tosymbol'> {'>'} </span>Guaraní</td>
                                            <td className='exchange__td exchange__td--border'>1.010</td>
                                            <td className='exchange__td'>1.165</td>
                                        </tr>
                                        <tr className='exchange__tr'>
                                            <td className='exchange__td'>Dólar<span className='exchange__tosymbol'> {'>'} </span>Peso</td>
                                            <td className='exchange__td'>4,91</td>
                                            <td className='exchange__td'>4,99</td>
                                        </tr>
                                        <tr className='exchange__tr'>
                                            <td className='exchange__td'>Dólar<span className='exchange__tosymbol'> {'>'} </span>Real</td>
                                            <td className='exchange__td'>7.230</td>
                                            <td className='exchange__td'>7.310</td>
                                        </tr>
                                        <tr className='exchange__tr'>
                                            <td className='exchange__td'>Euro<span className='exchange__tosymbol'> {'>'} </span>Guaraní</td>
                                            <td className='exchange__td'>7.230</td>
                                            <td className='exchange__td'>7.310</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </main>
                            <footer className='exchange__footer'>
                                <p className='exchange__font'><span className='exchange__font exchange__font--title'>Fuente:</span> Cambios Chaco</p>
                            </footer>
                        </div>
                    </article>
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
