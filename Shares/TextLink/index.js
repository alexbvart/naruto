import {textLink, hover_underline_animation} from './paragraph.module.css'
import {toTextCase} from '../../utils/formatTitles'
import { isEmpty } from 'utils/isEmpty';
import React from 'react';
const TextLink = React.forwardRef(({onClick,children}, ref) => {
    // console.log({children});
    if (isEmpty(children)) {
        return null
    }
    return ( 
        <>
            <p className={`${textLink} ${hover_underline_animation}`} ref={ref} onClick={onClick}>
                <span className={hover_underline_animation}>
                    { toTextCase(children.toString())} 
                </span>
            </p>
        </>
    );
})
export default TextLink;