import {title} from './title.module.css'
const Title = ({children}) => {
    return ( 
        <>
            <h1 className={title}>{children} </h1>
        </>
    );
}
export default Title;