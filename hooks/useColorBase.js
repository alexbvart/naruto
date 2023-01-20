import {useContext, useEffect} from 'react';
import ColorContext from '../context/Color/ColorContext';

const useColorBase = (md5_image,type) => {

    const { baseGradient, setBaseGradient, colorBase, setColorBase} = useContext(ColorContext)

    // useEffect(() => {
    //     if (!loading && error === undefined) {;
    //         setBaseGradient(`linear-gradient(341.09deg, #131213 50%, ${data.darkVibrant}  100%)`)
    //         setColorBase(data.darkVibrant)

    //         console.log("color d: ", data);
    //         console.log("color l: ", loading)
    //         console.log("color e: ", error);
    //     }
    //     return () => {

    //     }
    // }, [loading])



    return [colorBase, baseGradient];
}
export default useColorBase;