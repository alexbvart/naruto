import React, {useRef, useState} from 'react';
import Title from 'Shares/Title';
import useWindowDimensions from '../../hooks/useWindowDimension';
import DropDown from './DropDown';
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
                    <Section content={content.info.intro} key="intro" />
                    <Section content={content.info.creation} key="creation" />
                    <DropDown content={content.info.name} key="name" title={"Nombre"} />
                    <DropDown content={content.info.information} key="information" title={"Información"} />
                    <DropDown content={content.info.ninjaRank} key="ninjaRank" title={"Rango Ninja"} />
                    <DropDown content={content.info.family} key="family" title={"Familia"} />
                    <DropDown content={content.info.natureOfTheChakra} key="natureOfTheChakra" title={"Naturaleza del chacra"} />
                    <DropDown content={content.info.techniques} key="techniques" title={"Técnicas"} />
                    <DropDown content={content.info.tools} key="tools" title={"Herramientas"} />
                </section>
                
                <section className={section} >
                    <Section content={content.appearance.appearance}  key="appearance"/>
                    <Section content={content.appearance.personality} key="personality"/>
                </section>

                <section className={section} >
                    <Section content={content.history.history} key="history"/>
                    <Section content={content.history.partOne} key="partOne">
                        <Title>Primera parte</Title>
                    </Section>
                    <Section content={content.history.partTwo} key="partTwo">
                        <Title>Segunda parte</Title>
                    </Section>
                    <Section content={content.history.partChange} key="partChange">
                        <Title>Período de Cambios</Title>
                    </Section>
                    <Section content={content.history.partThree} key="partThree">
                        <Title>Tercera parte</Title>
                    </Section>
                </section>
                
                <section className={section} >
                    <Section content={content.skills} key="skills"/>
                </section>
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