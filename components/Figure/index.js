import Image from 'next/image'
import { useEffect, useState } from 'react';

import { FullScreen } from './fullScreen'

import { figure_wrapper,figure_wrapper_loading, f_w_border_radius, figcaption, loading} from './figure.module.css'
import { useImage } from 'hooks/useImage';

let i = []

const Figure = ({ src, className, description, height = 400, borderRadius = true, nofullScreen = true}) => {
    const [isLoadingImage, setIsLoadingImage] = useState(true)
    const {lowQuality, highQuality} = useImage({src})
    const [srcImage, setSrc] = useState(highQuality);

    const border_radius = borderRadius ? f_w_border_radius : "";

    const [activeFullScreen, setActiveFullScreen] = useState(false)

    useEffect(() => {
        const {highQuality} = useImage({src})
        setSrc(highQuality)
    }, [src])
    
    useEffect(() => {
        if(description){
            i = [...new Set(i), {src, description}]
        }
    }, [])

    return (
        <>
            <figure
                className={ isLoadingImage ? `${className} ${figure_wrapper_loading} ${loading}` : `${className} ${figure_wrapper} ${border_radius}`}
                // className={`${className} ${figure_wrapper} ${border_radius}`}
                onClick={() => setActiveFullScreen(nofullScreen? !activeFullScreen : activeFullScreen)}
            >
                <Image
                    src={srcImage}
                    onError={() => setSrc('https://i.postimg.cc/c1Kjpkt3/not-fount.png')}
                    placeholder="blur"
                    blurDataURL={lowQuality}
                    onLoadingComplete={ () => setIsLoadingImage(false)}
                    className={ isLoadingImage ? `${loading}` : ``}
                    alt={description}
                    objectPosition="center"
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