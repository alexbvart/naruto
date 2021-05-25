import Image from 'next/image'

import {closeModal, descriptionFullScreen , modal_screen, img} from './figure.module.css'

export const FullScreen = ({ description,src,height, setActiveFullScreen, activeFullScreen }) => {
    return (
        <figure className={`modal ${modal_screen}`} >
            
            <span
                className={`${closeModal}`}
                onClick={() => setActiveFullScreen(!activeFullScreen)}
            >X</span>
            
            <Image
                src={src}
                width={500}
                height={height}
                objectFit="cover"
                className={img}
            />

            {description && <figcaption className={descriptionFullScreen}>{description}</figcaption>}

            <style jsx>{`
                .modal{
                        display:${(activeFullScreen) ? 'flex' : 'none'};
                        z-Index: ${(activeFullScreen) ? '10' : '-1'};
                    }
            `}</style>

        </figure>
    )
}
