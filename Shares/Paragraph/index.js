import {paragraph} from './paragraph.module.css'
import {toTextCase} from '../../utils/formatTitles'
const Paragraph = ({children}) => {
    return ( 
        <>
            <p className={paragraph}> { toTextCase(children.toString())} </p>
        </>
    );
}
export default Paragraph;