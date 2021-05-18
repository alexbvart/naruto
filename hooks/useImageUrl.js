import { useEffect, useState } from 'react'

function useImageUrl(type="",images, resolution=500) {

    const correctResolution = returnTheCorrectResolution(resolution)
    /* console.log(type); */
    const [imgUrl, setImgUrl] = useState(`https://cdns-images.dzcdn.net/images/cover/${images}/${correctResolution}x${correctResolution}-000000-80-0-0.jpg`)

    useEffect(() => {
        if (type==="playlist") {
        setImgUrl(`https://cdns-images.dzcdn.net/images/playlist/${images}/${correctResolution}x${correctResolution}-000000-80-0-0.jpg`);
        } 
        return () => {
            
        }
    }, [])

    return imgUrl;
}

export default useImageUrl


const returnTheCorrectResolution = (resolution) =>{
    switch (resolution) {
        case 250:            
            return 250
        case 500:            
            return 500
        case 1000:            
            return 1000
    }
}
