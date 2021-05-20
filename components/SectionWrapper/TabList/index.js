import React, {useState,Children, useEffect} from 'react';
import {nav,
        navigation,tab_element,tab_element_active,
        navigation_buuble,bubble,bubble_active} from './tablist.module.css'

const TabList = ({activeKey, onSelect, children}) => {

    let activeKey_ = activeKey ===1 ? activeKey : activeKey + 1;
    
    const [keySelect, setKeySelect] = useState(activeKey)
    useEffect(() => {
        /* console.log({activeKey, onSelect, children},'MONTAR'); */
        /* console.log({activeKey},'MONTAR' ,{keySelect}); */
        
        
        return () => {
            /* console.log({activeKey, onSelect, children},'desMONTAR'); */
            /* console.log({activeKey},'DESMONTAR', {keySelect}); */
            
        }
    }, [activeKey])

    return ( 
        <nav className={nav}>
        <div className={navigation}>
        
            {Children.map(children, (child, i) => (
                <div
                    key={child.props.pushSlide}
                    className={`${tab_element} ${activeKey === child.props.pushSlide && tab_element_active} }`}
                    onClick={() => {
                        onSelect(child.props.pushSlide);
                        child.props.ScrollFromSection(child.props.pushSlide);
                    }}
                >
                    {child.props.children}
                </div>
            ))}
        </div>

        <div className={navigation_buuble}>
            {Children.map(children, (child) => (
                <div
                    className={`${bubble} ${activeKey === child.props.pushSlide && bubble_active}`}
                ></div>
                
            ))}
        </div>
        </nav>
    );
}
export default TabList;