import { useCarousel } from 'hooks/useCarousel';
import Image from 'next/image'

import { closeModal, descriptionFullScreen, modal_screen, img, containerCarrousel, btn, btnRight, btnLeft, count } from './figure.module.css'


export const FullScreen = ({ height, setActiveFullScreen, activeFullScreen, arrayImg = [], src }) => {

    const { btnL, 
            btnR, 
            PaginacionImagenes, 
            go, 
            back, 
            currentPage, 
            colorBase, 
            baseGradient
        } = useCarousel(arrayImg, src);

    return (
        <>
            <figure className={`modal ${modal_screen}`} >
                <span
                    className={`${closeModal}`}
                    onClick={() => setActiveFullScreen(!activeFullScreen)}
                >X</span>

                {(btnL) && <button className={`${btnLeft} ${btn}`} onClick={back} > {'<'} </button>}
                {(btnR) && <button className={`${btnRight} ${btn}`} onClick={go}>{'>'}</button>}

                <div className={`${containerCarrousel}`}>

                    {
                        PaginacionImagenes().map((img_item, index) => (

                            <div key={index}>

                                <Image
                                    src={img_item.src}
                                    width={500}
                                    height={height}
                                    objectFit="cover"
                                    className={img}
                                    draggable={false}
                                />

                                {img_item.description && <figcaption className={descriptionFullScreen}>{img_item.description}</figcaption>}

                                <p className={count}>
                                    {arrayImg.length - (arrayImg.length - currentPage)} /   {arrayImg.length - 1}
                                </p>
                            </div>
                        ))

                    }

                </div>


                <style jsx>{`
                        .modal{
                                display:${(activeFullScreen) ? 'flex' : 'none'};
                                z-Index: ${(activeFullScreen) ? '10' : '-1'};
                                background: ${colorBase} ${baseGradient};
                            }
                        
                    `}</style>

            </figure>
        </>
    )
}
