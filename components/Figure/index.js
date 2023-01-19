import Image from 'next/image'
import { useEffect, useState } from 'react';

import { FullScreen } from './fullScreen'

import { figure_wrapper, f_w_border_radius, figcaption } from './figure.module.css'

let i = []

const Figure = ({ src, className, description, height = 400, borderRadius = true }) => {
    console.log(src);
    const border_radius = borderRadius ? f_w_border_radius : "";

    const [activeFullScreen, setActiveFullScreen] = useState(false)

    useEffect(() => {
        if(description){
            i = [...new Set(i), {src, description}]
        }
        console.log('object')
    }, [])

    return (
        <>
            <figure
                className={`${className} ${figure_wrapper} ${border_radius}`}
                onClick={() => setActiveFullScreen(!activeFullScreen)}
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


            {
                (activeFullScreen) &&
                <FullScreen
                    activeFullScreen={activeFullScreen}
                    setActiveFullScreen={setActiveFullScreen}
                    height={height}
                    src={src}
                    arrayImg={i}
                />
            }

        </>

    );
}
export default Figure;