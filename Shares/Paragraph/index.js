import {paragraph} from './paragraph.module.css'
import {toTextCase} from '../../utils/formatTitles'
import { isEmpty } from 'utils/isEmpty';
import React from 'react';
const Paragraph = React.forwardRef(({onClick,children}, ref) => {
    // console.log({children});
    if (isEmpty(children)) {
        return null
    }
    return ( 
        <>
            <p className={paragraph} ref={ref} onClick={onClick}> { toTextCase(children.toString())} </p>
        </>
    );
})
export default Paragraph;