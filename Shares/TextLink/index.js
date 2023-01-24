import {textLink} from './paragraph.module.css'
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
            <p className={textLink} ref={ref} onClick={onClick}> { toTextCase(children.toString())} </p>
        </>
    );
})
export default TextLink;