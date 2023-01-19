import React, {useRef, useState} from 'react';
import Paragraph from 'Shares/Paragraph';
import Title from 'Shares/Title';
import useWindowDimensions from '../../hooks/useWindowDimension';
import DropDown from './DropDown';
import { Section, AbstractSection, MiniInfo, OneSection } from './Section';
import TabAnchor from './TabAnchor';
import TabAnchorList from './TabAnchorList';

import TabButton from './TabButton';
import TabList from './TabList';
import {carrousel,section} from './wrapper.module.css'

const SectionWrapper = ({content}) => {

    const windowSize = useWindowDimensions();
    const mainContainer = useRef(null)
    const wrapperContainer = mainContainer.current;
    const [key, setKey] = useState(-1);
    // const widthOfWindow = windowSize.width > 560 ? "900px" : "calc(100vw - 48px) ";

    const ScrollFromSection = (id)=>{
        const section = wrapperContainer.children[id+1];
        // section.scrollIntoView( {block: "start", inline: "nearest"})   
        window.scrollTo({
            top: section.offsetTop - 120,
            left: 0,
            behavior: "auto",
            // behavior: "smooth",
        });
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
            <TabAnchorList
                activeKey={key}
                onSelect={(keyOfChild) => {
                    setKey(keyOfChild);
                }
            }>
                {   content && 
                    content.map(( {title}, index) => ( 
                        <TabAnchor 
                            key={title+index}
                            title={title} 
                            pushSlide={index-1}  
                            ScrollFromSection={ScrollFromSection}
                        >
                            {title.substring(0, 12)}
                        </TabAnchor>
                    ))
                }
            </TabAnchorList>

            <main 
                ref={mainContainer} 
                className={`${carrousel} carrousel_dinamic wrapper_margin_globals`} 
                // onScroll={()=> DetectScrollPosition()}
                >
                { content.map((c, index) => (
                    <Section content={c} key={index}/>
                ))}
                
                {/* <section className={section} key="info">
                    {content.info.intro && 
                        <Section  content={content.info.intro} key="intro" />}
                    {content.info.creation && 
                        <Section  content={content.info.creation} key="creation" />}
                    {content.info.name && 
                        <DropDown 
                            content={content.info.name} 
                            key="name" 
                            title={"Nombre"} 
                            status={true}/>}
                    {content.info.information && 
                        <DropDown content={content.info.information} key="information" title={"Información"} />}
                    {content.info.ninjaRank && 
                        <DropDown content={content.info.ninjaRank} key="ninjaRank" title={"Rango Ninja"} />}
                    {content.info.family && 
                        <DropDown content={content.info.family} key="family" title={"Familia"} />}
                    {content.info.natureOfTheChakra && 
                        <DropDown content={content.info.natureOfTheChakra} key="natureOfTheChakra" title={"Naturaleza del chacra"} />}
                    {content.info.techniques && 
                        <DropDown content={content.info.techniques} key="techniques" title={"Técnicas"} />}
                    {content.info.tools && 
                        <DropDown content={content.info.tools} key="tools" title={"Herramientas"} />}
                </section> */}
                
                


                {/* <section className={section} >
                    {content.history.history &&
                        <Section content={content.history.history} key="history"/>}
                    {content.history.partOne &&
                    <Section content={content.history.partOne} key="partOne">
                        <Title>Primera parte</Title>
                    </Section>}
                    {content.history.partTwo &&
                    <Section content={content.history.partTwo} key="partTwo">
                        <Title>Segunda parte</Title>
                    </Section>}
                    {content.history.partChange&&
                    <Section content={content.history.partChange} key="partChange">
                        <Title>Período de Cambios</Title>
                    </Section>}
                    {content.history.partThree &&
                    <Section content={content.history.partThree} key="partThree">
                        <Title>Tercera parte</Title>
                    </Section>}
                </section>
                
                <section className={section} >
                    { content.skills && <Section content={content.skills} key="skills"/>}
                </section> */}
            </main> 

            {/* <style jsx>{`
                .carrousel_dinamic{
                    grid-template-columns: repeat(4, ${widthOfWindow});
                }
            `}</style> */}

        </>
    );
}
export default SectionWrapper;