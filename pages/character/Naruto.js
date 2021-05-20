import Head from 'next/Head'
import Hero from '../../components/Hero';
import SectionWrapper from '../../components/SectionWrapper/index,';
import {naruto} from "./dataNaruto";

const Naruto = () => {

    return ( 
        <>

            <Hero header={naruto.header} />
            <SectionWrapper content={naruto}></SectionWrapper>
        </>
    );
}
export default Naruto;