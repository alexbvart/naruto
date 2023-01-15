import {span_text,defectPadding} from './span.module.css'
const Span = ({children,className}) => {
    const padding = className ?`${className}`: defectPadding;
    return ( 
        <>
            <h2 className={`${span_text} ${padding}`}> {children} </h2>
        </>
    );
}
export default Span;