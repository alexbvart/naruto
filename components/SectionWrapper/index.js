
import useObserver from 'hooks/useObserver';
import React, {useRef, useState} from 'react';
import Paragraph from 'Shares/Paragraph';
import Title from 'Shares/Title';
import { isEmpty } from 'utils/isEmpty';
import useWindowDimensions from '../../hooks/useWindowDimension';
import DropDown from './DropDown';
import { Section, AbstractSection, MiniInfo, OneSection } from './Section';
import TabAnchor from './TabAnchor';
import TabAnchorList from './TabAnchorList';

import TabButton from './TabButton';
import TabList from './TabList';
import {carrousel,section} from './wrapper.module.css'

const SectionWrapper = ({content}) => {
    // console.log(content);
    const windowSize = useWindowDimensions();

    const tabList = useRef(null)
    const mainContainer = useRef(null)
    const wrapperContainer = mainContainer.current;
    const [key, setKey] = useState(-1);
    // const widthOfWindow = windowSize.width > 560 ? "900px" : "calc(100vw - 48px) ";
    
    const {isOnScreen} = useObserver(tabList)

    // console.log(`se encontro el tab list: ${isOnScreen} ${tabList.current}`);
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
                ref={tabList} 
                activeKey={key}
                onSelect={(keyOfChild) => {
                    setKey(keyOfChild);
                }}
            >
                {   content && 
                    content.map(( {title}, index) => ( 
                        <TabAnchor 
                            key={title+index}
                            title={title} 
                            pushSlide={index-1}  
                            ScrollFromSection={ScrollFromSection}
                        >
                            {title}
                        </TabAnchor>
                    ))
                }
            </TabAnchorList>

            <main 
                ref={mainContainer} 
                className={`${carrousel} carrousel_dinamic wrapper_margin_globals`} 
                // onScroll={()=> DetectScrollPosition()}
                >
                { !isEmpty(content) &&
                    content.map((c, index) => (
                        <Section content={c} key={index}/>
                ))}
            </main> 
        </>
    );
}
export default SectionWrapper;