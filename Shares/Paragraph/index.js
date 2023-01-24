import {paragraph} from './paragraph.module.css'
import {toTextCase} from '../../utils/formatTitles'
import { isEmpty } from 'utils/isEmpty';
const Paragraph = ({children}) => {
    // console.log({children});
    if (isEmpty(children)) {
        return null
    }
    return ( 
        <>
            <p className={paragraph}> { toTextCase(children.toString())} </p>
        </>
    );
}
export default Paragraph;