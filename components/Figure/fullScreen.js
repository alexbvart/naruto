import { useCarousel } from 'hooks/useCarousel';


import { closeModal, modal_screen, containerCarrousel,} from './figure.module.css';


import { Carrousel } from './Carrousel';

export const FullScreen = ({ height, setActiveFullScreen, activeFullScreen, arrayImg, src }) => {

    const {
        baseGradient,
        colorBase,
        index
    } = useCarousel(arrayImg, src);
    
    return (
        <>
            <figure className={`modal ${modal_screen}`} >
                <span
                    className={`${closeModal}`}
                    onClick={() => setActiveFullScreen(!activeFullScreen)}
                >X</span>

                <div className={`${containerCarrousel}`}>
                    {
                        (Number(index) !== -1)
                        && <Carrousel height={height} index_img={index} images={arrayImg}/>
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
