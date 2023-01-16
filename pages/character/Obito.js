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
            <SectionWrapper 
                abstract={character.header.abstract} 
                content={character.information}
                clan={character.header.clan} 
                info={character.info}
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
                character,
        },
    }
  }

export default Naruto;