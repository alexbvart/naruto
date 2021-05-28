import { useEffect, useState } from "react";
import useColorBase from "./useColorBase";


export const useCarousel = (listImg=[],source) => {


    const [colorBase, baseGradient] = useColorBase(listImg[0], 'artist');
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        
        const newIndex = listImg.findIndex( (img)=> img.src === source);
        setIndex(newIndex);

    }, [source])

    

    return{
        colorBase,
        baseGradient,
        index
    }
}
