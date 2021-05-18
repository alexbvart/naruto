import {paragraph} from './paragraph.module.css'

const Paragraph = ({children}) => {
    return ( 
        <>
            <p className={paragraph}> {children} </p>
        </>
    );
}
export default Paragraph;