import React from 'react';
import {nav,
        navigation,tab_element,tab_element_active,
        navigation_buuble,bubble,bubble_active} from './tablist.module.css'

const TabAnchorList = ({activeKey, onSelect, children}) => {
    return ( 
        <nav className={`${nav} wrapper_margin_globals`}>
        <div className={navigation}>
        
            {children.map((child, i) => (
                <div
                    key={child.props.pushSlide}
                    className={`${tab_element} ${activeKey === child.props.pushSlide && tab_element_active} }`}
                    onClick={() => {
                        onSelect(child.props.pushSlide);
                        // child.props.ScrollFromSection(child.props.pushSlide);
                    }}
                >
                    {child.props.children}
                </div>
            ))}
        </div>

        <div className={navigation_buuble}>
            {children.map((child, i) => (
                <div
                    className={`${bubble} ${activeKey === child.props.pushSlide && bubble_active}`}
                ></div>
            ))}
        </div> 
        </nav>
    );
}
export default TabAnchorList;