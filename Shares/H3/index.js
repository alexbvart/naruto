import {h3} from './h3.module.css'

const H3 = ({children}) => {
    return ( 
        <>
            <h3 className={h3}>
                {children}
            </h3>
        </>
    );
}
export default H3;