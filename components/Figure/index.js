import Image from 'next/image'
import { useState } from 'react';

import {FullScreen} from './fullScreen'

import { figure_wrapper, f_w_border_radius, figcaption } from './figure.module.css'

const Figure = ({ src, className, description, height = 400, borderRadius = true }) => {

    const border_radius = borderRadius ? f_w_border_radius : "";
    
    const [activeFullScreen, setActiveFullScreen] = useState(false)

    return (
        <>
            <figure
                className={`${className} ${figure_wrapper} ${border_radius}`}
                onClick={()=>  setActiveFullScreen(!activeFullScreen)}
            >
                <Image
                    src={src}
                    alt={description}
                    objectFit="cover"
                    quality={100}
                    width={500}
                    height={height}
                    layout="responsive"
                    
                />
                {description &&
                    <figcaption className={figcaption}>{description}</figcaption>}

            </figure>


            <FullScreen 
                activeFullScreen={activeFullScreen}
                setActiveFullScreen={setActiveFullScreen}
                height={height}
                description={description}
                src={src}
            />
        </>

    );
}
export default Figure;