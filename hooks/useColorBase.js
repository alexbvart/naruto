import {useContext, useEffect} from 'react';
import { usePalette } from 'react-palette'
import ColorContext from '../context/Color/ColorContext';
import useImageUrl from './useImageUrl';




const useColorBase = (md5_image,type) => {

    var imgUrl = useImageUrl(type,md5_image)

    /* const { data, loading, error } = usePalette(datalist.picture_medium||datalist.cover_medium) */
    
    if (type==="artist") {
        imgUrl = md5_image
    }
    const { data, loading, error } = usePalette(imgUrl)
    const { baseGradient, setBaseGradient, colorBase, setColorBase} = useContext(ColorContext)

    useEffect(() => {
        if (!loading && error === undefined) {;
            setBaseGradient(`linear-gradient(341.09deg, #131213 50%, ${data.darkVibrant}  100%)`)
            setColorBase(data.darkVibrant)

            console.log("color d: ", data);
            console.log("color l: ", loading)
            console.log("color e: ", error);
        }
        return () => {

        }
    }, [loading])



    return [colorBase, baseGradient];
}
export default useColorBase;