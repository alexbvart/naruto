import React, {useEffect, useState} from 'react';
import useWindowDimensions from '../../hooks/useWindowDimension';
import Section from './Section';

import TabButton from './TabButton';
import TabList from './TabList';
import {carrousel,section} from './wrapper.module.css'
const SectionWrapper = ({content}) => {

    const windowSize = useWindowDimensions();

    const ScrollFromSection = (value)=>{
        var elmnt = document.getElementById("mainContainer");
            elmnt.scrollLeft = (value - 1 ) * elmnt.clientWidth;
            elmnt.scrollTop  = 0;
    }
    const DetectScrollPosition = () => {
        var elmnt = document.getElementById("mainContainer");
        const {scrollLeft,clientWidth} = elmnt;

        const numberOfSection = Math.round(scrollLeft / clientWidth) + 1;
        const change = key !== numberOfSection;
        if (change) {
            setKey(numberOfSection)
            elmnt.scrollTop  = 0;
            /* console.log({key},'!=',{numberOfSection},' = ',{change} , ); */
        }

    }
    const [key, setKey] = useState(1);
    const widthOfWindow = windowSize.width > 560 ? "85vw" : "calc(100vw - 48px) ";


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
                <TabButton ScrollFromSection={ScrollFromSection} pushSlide={5}>Habilidades </TabButton>
            </TabList>


            <main className={`${carrousel} carrousel_dinamic`} id="mainContainer" onScroll={()=> DetectScrollPosition()}>

                <section className={section} >
                    <Section content={content.info.intro}></Section>
                </section>
                
                <section className={section} >
                    <Section content={content.appearance.appearance}></Section>
                    <Section content={content.appearance.personality}></Section>
                </section>

                <section className={section} >
                    <Section content={content.history.history}></Section>

                </section>
                <section className={section} >Habilidades {key}</section>
                <section className={section} >Habilidades 2{key}</section>
            </main>

            <style jsx>{`
                .carrousel_dinamic{
                    grid-template-columns: repeat(5, ${widthOfWindow});
                }
            `}</style>

        </>
    );
}
export default SectionWrapper;