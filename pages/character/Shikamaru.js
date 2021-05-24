import Head from 'next/head'
import Hero from '../../components/Hero';
import SectionWrapper from '../../components/SectionWrapper/index,';
import {shikamaru} from "../../dataShikamaru";

const Naruto = () => {
    return ( 
        <>
            <Head>
                <title>{shikamaru.header.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#15171B" />
            </Head>
            <Hero header={shikamaru.header} />
            <SectionWrapper content={shikamaru}></SectionWrapper>
        </>
    );
}
export default Naruto;