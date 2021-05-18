import React, {useState,Children} from 'react';
import {nav,
        navigation,tab_element,tab_element_active,
        navigation_buuble,bubble,bubble_active} from './tablist.module.css'

const TabList = ({activeKey, onSelect, children}) => {

    console.log({activeKey, onSelect, children});
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