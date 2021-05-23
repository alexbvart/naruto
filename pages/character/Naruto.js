import Head from 'next/head'
import Hero from '../../components/Hero';
import SectionWrapper from '../../components/SectionWrapper/index,';
import {naruto} from "../../dataNaruto";
import {shikamaru} from "../../dataShikamaru";

const Naruto = () => {
console.log(shikamaru);
    return ( 
        <>
            <Head>
                <title>Naruto</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#15171B" />
            </Head>
            <Hero header={shikamaru.header} />
            <SectionWrapper content={shikamaru}></SectionWrapper>
        </>
    );
}
export default Naruto;