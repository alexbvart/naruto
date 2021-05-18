import React, {useState} from 'react';
import ColorContext from './ColorContext';
const ColorState = ({children}) => {

    const baseGradientInitial = `linear-gradient(341.09deg, #131213 50%, #15386C  100%)`
    const [baseGradient, setBaseGradient] = useState(baseGradientInitial)
    const [colorBase, setColorBase] = useState("#15386C")


    return ( 
        <ColorContext.Provider
            value={{
                    baseGradient, setBaseGradient,
                    colorBase, setColorBase
            }}
        >
            {children}
        </ColorContext.Provider>
    );
}
export default ColorState;