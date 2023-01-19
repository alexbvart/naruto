import { AbstractSection, MiniInfo } from 'components/SectionWrapper/Section';
import Head from 'next/head'
import Hero from '../../components/Hero';
import SectionWrapper from '../../components/SectionWrapper/index,';


const Naruto = ({character}) => {

    return ( 
        <>
            <Head>
                <title>{character.header.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#15171B" />
            </Head>
            <Hero header={character.header} />
            <section className={"wrapper_margin_globals"}>
                <MiniInfo 
                    clan={character.header.clan && character.header.clan[0]} 
                    range={character.info?.range?.at(-1)} 
                    birth={character.info?.birth} 
                    age={character.info?.age?.at(-1)} />
                <AbstractSection content={character.header.abstract} title={"Resumen"} />
            </section>
            <SectionWrapper 
                content={character.information}
            />
        </>
    );
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:3000/api/character')
    const character = await res.json()
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
            props: {
                character: character[0],
        },
    }
  }

export default Naruto;