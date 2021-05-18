import React, {useState} from 'react';

import TabButton from './TabButton';
import TabList from './TabList';
import {carrousel,section} from './wrapper.module.css'
const SectionWrapper = () => {

    const ScrollFromSection = (value)=>{
        var elmnt = document.getElementById("mainContainer");
            elmnt.scrollLeft = (value - 1 ) * elmnt.clientWidth;
        console.log(value);
        console.log(elmnt.scrollLeft);
    }
    const DetectScrollPosition = () => {
        var elmnt = document.getElementById("mainContainer");
        const {scrollLeft,clientWidth} = elmnt;
        console.log("modulo: ", Math.floor(scrollLeft / clientWidth));
    }
    const [key, setKey] = useState(0);


    return ( 
        <>
            <TabList
                activeKey={key}
                onSelect={(keyOfChild) => {
                    setKey(keyOfChild);
                }
            }>
                <TabButton ScrollFromSection={ScrollFromSection} pushSlide={1}>Información </TabButton>
                <TabButton ScrollFromSection={ScrollFromSection} pushSlide={2}>Aparición </TabButton>
                <TabButton ScrollFromSection={ScrollFromSection} pushSlide={3}>Historia </TabButton>
                <TabButton ScrollFromSection={ScrollFromSection} pushSlide={4}>Habilidades </TabButton>
            </TabList>


            <main className={carrousel} id="mainContainer" onScroll={()=> DetectScrollPosition()}>
                <section className={section} >Información</section>
                <section className={section} >Apariencia</section>
                <section className={section} >Hisotira</section>
                <section className={section} >Habilidades</section>
            </main>

        </>
    );
}
export default SectionWrapper;