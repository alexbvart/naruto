import {sub_title,defectPadding} from './subtitle.module.css'


const Subtitle = ({children,className}) => {
    const padding = className ?`${className}`: defectPadding;
    return ( 
        <>
            <h2 className={`${sub_title} ${padding}`}> {children} </h2>
        </>
    );
}
export default Subtitle;