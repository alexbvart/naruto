import React, {useState} from 'react';
import Hero from '../../components/Hero';
import {naruto} from "./dataNaruto"
const Naruto = () => {

    console.log(naruto);
    return ( 
        <>
            <Hero header={naruto.header} />
        </>
    );
}
export default Naruto;