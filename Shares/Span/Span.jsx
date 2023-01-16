import {span_text,defectPadding} from './span.module.css'
const Span = ({children,className}) => {
    const padding = className ?`${className}`: defectPadding;
    return ( 
        <>
            <span className={`${span_text} ${padding}`}> {children} </span>
        </>
    );
}
export default Span;