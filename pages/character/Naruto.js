import React, {useState} from 'react';
import Hero from '../../components/Hero';
import SectionWrapper from '../../components/SectionWrapper/index,';
import {naruto} from "./dataNaruto"
const Naruto = () => {

    console.log(naruto);
    return ( 
        <>
            <Hero header={naruto.header} />
            <SectionWrapper></SectionWrapper>
        </>
    );
}
export default Naruto;