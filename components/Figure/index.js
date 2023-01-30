import Image from 'next/image'
import { useEffect, useState } from 'react';

import { FullScreen } from './fullScreen'

import { figure_wrapper,figure_wrapper_loading, f_w_border_radius, figcaption, loading} from './figure.module.css'
import { useImage } from 'hooks/useImage';
import errorImage from '/public/error_image.png'



let i = []

const Figure = ({ src, className, description, height = 400, borderRadius = true, nofullScreen = true}) => {
    // console.log(src);
    const [isLoadingImage, setIsLoadingImage] = useState(true)
    const {lowQuality, highQuality} = useImage({src})
    const [srcImage, setSrc] = useState(highQuality);

    const customLoader = ({ src, width, quality }) => {
        return `http://localhost:3000/_next/image?url=${encodeURIComponent(highQuality)}&w=${width}&q=50`
    }
    const border_radius = borderRadius ? f_w_border_radius : "";

    const [activeFullScreen, setActiveFullScreen] = useState(false)

    useEffect(() => {
        if(description){
            i = [...new Set(i), {src, description}]
        }
        // console.log('object')
    }, [])

    return (
        <>
            <figure
                className={ isLoadingImage ? `${figure_wrapper_loading} ${loading}` : `${className} ${figure_wrapper} ${border_radius}`}
                // className={`${className} ${figure_wrapper} ${border_radius}`}
                onClick={() => setActiveFullScreen(nofullScreen? !activeFullScreen : activeFullScreen)}
            >
                <Image
                    src={srcImage}
                    onError={() => setSrc('https://i.postimg.cc/ryPtffNW/error-image.png')}
                    // onError={() => setSrc('https://static.wikia.nocookie.net/naruto/images/c/c0/Karui_Parte_III_Anime.png/revision/latest/scale-to-width-down/1000?cb=20180524143326&path-prefix=es')}
                    placeholder="blur"
                    blurDataURL={`${process.env.APP_URL}/_next/image?url=${encodeURIComponent(lowQuality)}&w=640&q=10`}
                    // loader={customLoader}
                    onLoadingComplete={ () => setIsLoadingImage(false)}
                    className={ isLoadingImage ? `${loading}` : ``}
                    // className={loading}
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