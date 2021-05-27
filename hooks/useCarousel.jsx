import { useEffect, useState } from "react";
import useColorBase from "./useColorBase";
import useColorTrack from "./useColorTrack";


export const useCarousel = (listImg,src) => {

    
    const [currentPage, setCurrentPage] = useState(0);
    const [colorBase, baseGradient] = useColorBase(listImg[currentPage], 'artist');
    const [darkMuted, lightVibrant] = useColorTrack(listImg)

    const [btnL, setBtnL] = useState(true)
    const [btnR, setBtnR] = useState(true)

    const PaginacionImagenes = () => listImg.slice(currentPage, currentPage + 1);

    const go = () => ((listImg.length) >= (currentPage + 1)) && setCurrentPage(currentPage + 1);

    const back = () => (currentPage > 0) && setCurrentPage(currentPage - 1);

    useEffect(() => {

        (currentPage === 0) ? setBtnL(false) : setBtnL(true);
        (currentPage === listImg.length - 1) ? setBtnR(false) : setBtnR(true);

    }, [currentPage]);


    useEffect(() => {
        listImg.forEach((img, index) => {
            if (img.src === src) {
                setCurrentPage(index);
                return;
            }
        });

    }, [])

    return{
        btnL,
        btnR,
        PaginacionImagenes,
        go,
        back,
        currentPage,
        colorBase,
        baseGradient,
        darkMuted, lightVibrant
    }
}
