import React, {useEffect, useState} from 'react';

import TabButton from './TabButton';
import TabList from './TabList';
import {carrousel,section} from './wrapper.module.css'
const SectionWrapper = () => {

    const ScrollFromSection = (value)=>{
        var elmnt = document.getElementById("mainContainer");
            elmnt.scrollLeft = (value - 1 ) * elmnt.clientWidth;
    }
    const DetectScrollPosition = () => {
        var elmnt = document.getElementById("mainContainer");
        const {scrollLeft,clientWidth} = elmnt;

        const numberOfSection = Math.round(scrollLeft / clientWidth) + 1;
        const change = key !== numberOfSection;
        if (change) {
            setKey(numberOfSection)
            /* console.log({key},'!=',{numberOfSection},' = ',{change} , ); */
        }

    }
    const [key, setKey] = useState(1);

    useEffect(() => {
        /* console.log({key},'Key montar'); */
        return () => {
            /* console.log({key},'Key desmontar'); */
        }
    }, [key])


    return ( 
        <>
            <TabList
                activeKey={key}
                onSelect={(keyOfChild) => {
                    setKey(keyOfChild);
                }
            }>
                <TabButton ScrollFromSection={ScrollFromSection} pushSlide={1}>Información </TabButton>
                <TabButton ScrollFromSection={ScrollFromSection} pushSlide={2}>Apariencia </TabButton>
                <TabButton ScrollFromSection={ScrollFromSection} pushSlide={3}>Historia </TabButton>
                <TabButton ScrollFromSection={ScrollFromSection} pushSlide={4}>Habilidades </TabButton>
            </TabList>


            <main className={carrousel} id="mainContainer" onScroll={()=> DetectScrollPosition()}>
                <section className={section} >Información {key}</section>
                
                <section className={section} >Apariencia {key}</section>
                <section className={section} >Hisotira {key}</section>
                <section className={section} >Habilidades {key}</section>
            </main>

        </>
    );
}
export default SectionWrapper;