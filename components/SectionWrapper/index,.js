import React, {useRef, useState} from 'react';
import Title from 'Shares/Title';
import useWindowDimensions from '../../hooks/useWindowDimension';
import Section from './Section';

import TabButton from './TabButton';
import TabList from './TabList';
import {carrousel,section} from './wrapper.module.css'

const SectionWrapper = ({content}) => {

    const windowSize = useWindowDimensions();
    const mainContainer = useRef(null)
    const wrapperContainer = mainContainer.current;
    const [key, setKey] = useState(1);
    const widthOfWindow = windowSize.width > 560 ? "85vw" : "calc(100vw - 48px) ";

    const ScrollFromSection = (value)=>{
        wrapperContainer.scrollLeft = (value - 1 ) * wrapperContainer.clientWidth;
        wrapperContainer.scrollTop  = 0;
    }
    const DetectScrollPosition = () => {
        const {scrollLeft,clientWidth} = wrapperContainer;
        const numberOfSection = Math.round(scrollLeft / clientWidth) + 1;
        const change = key !== numberOfSection;
        if (change) {
            setKey(numberOfSection)
            wrapperContainer.scrollTop  = 0;
            /* console.log({key},'!=',{numberOfSection},' = ',{change} , ); */
        }
    }

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


            <main 
                ref={mainContainer} 
                className={`${carrousel} carrousel_dinamic wrapper_margin_globals`} 
                onScroll={()=> DetectScrollPosition()}>

                <section className={section} >
                    <Section content={content.info.intro}></Section>
                </section>
                
                <section className={section} >
                    <Section content={content.appearance.appearance}></Section>
                    <Section content={content.appearance.personality}></Section>
                </section>

                <section className={section} >
                    <Section content={content.history.history}></Section>
                    <Section content={content.history.partOne}><Title>Primera parte</Title></Section>
                </section>
                
                <section className={section} >Habilidades {key}</section>
            </main>

            <style jsx>{`
                .carrousel_dinamic{
                    grid-template-columns: repeat(4, ${widthOfWindow});
                }
            `}</style>

        </>
    );
}
export default SectionWrapper;