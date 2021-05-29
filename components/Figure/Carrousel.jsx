import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Pagination, Navigation } from 'swiper/core';
import Image from 'next/image'

// install Swiper modules
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import { descriptionFullScreen, img,btn,btnRight,btnLeft } from './figure.module.css';

SwiperCore.use([Keyboard, Pagination, Navigation]);



export const Carrousel = ({ height, index_img, images }) => {
    return (
        <>
            <div className={`${btn} ${btnRight} btnRight`} > {'>'}  </div>
            <div className={`${btn} ${btnLeft} btnLeft`}>{'<'}</div>

            <Swiper
                pagination={{
                    "type": "fraction"
                }}
                navigation={{
                    prevEl: ".btnLeft",
                    nextEl: ".btnRight",
                }}
                keyboard={{
                    enabled: true,
                    onlyInViewport: false
                }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                initialSlide={Number(index_img)}
            >
                {
                    images.map((img_item, index) => (

                        <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <Image
                                src={img_item.src}
                                width={500}
                                height={height}
                                objectFit="cover"
                                className={img}
                                draggable={false}
                            />

                            {img_item.description && <figcaption className={descriptionFullScreen}>{img_item.description}</figcaption>}

                        </SwiperSlide>

                    ))

                }
            </Swiper>
        </>
    )
}
