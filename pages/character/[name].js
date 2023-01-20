import DropDown from 'components/SectionWrapper/DropDown';
import { AbstractSection, MiniInfo } from 'components/SectionWrapper/Section';
import Head from 'next/head'
import { toSnakeCase } from 'utils/formatTitles';
import Hero from '../../components/Hero';
import SectionWrapper from '../../components/SectionWrapper/index,';


const character = ({character}) => {
    const { birth, blood, age, height, weight, uniquePersonality} = character.info
    return ( 
        <>
            <Head>
                <title>{character.header.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#171516" />
            </Head>
            <Hero header={character.header} />
            <section className={"wrapper_margin_globals"}>
                <MiniInfo 
                    clan={character?.header?.clan?.length > 0 && character.header.clan[0].clanName} 
                    range={character.info?.range?.at(-1)} 
                    birth={character.info?.birth} 
                    age={typeof character.info?.age === 'string' 
                            ? character.info?.age
                            : character.info?.age?.at(-1)
                        } />
                <AbstractSection content={character.header.abstract} title={"Resumen"} />

                { (     birth === null || blood === null ||  age === null ||
                        height === null ||  weight === null ||  uniquePersonality === null
                ) &&
                <DropDown 
                    content={{
                        "Nacimiento" : character?.info?.birth || '',
                        "Sangre" : character?.info?.blood || '',
                        "Edad" : character?.info?.age || '',
                        "Altura" : character?.info?.height || '',
                        "Peso" : character?.info?.weight || '',
                        "Habilidad unica" : character?.info?.uniquePersonality || '',
                    }} 
                    key="Generalidades" 
                    title={"Generalidades"} 
                    status={false}
                />
                }
                { (character?.header?.clan?.length > 0 || character?.header?.affiliation?.length > 0) && 
                <DropDown 
                    content={{
                        "Alistamiento" : character.header?.affiliation|| "",
                        "Clan" : character.header?.clan  || ""
                    }} 
                    key="Afiliacion" 
                    title={"Afiliación"} 
                    status={true}
                />}
                { (character?.header?.kekkeiGenkai?.length > 0 || character?.header?.element?.length > 0) && 
                <DropDown 
                    content={{
                        "Elementos" : character.header?.element|| "",
                        "Kekkei Genkai" : character.header?.kekkeiGenkai  || ""
                    }} 
                    key="Naturaleza del chacra" 
                    title={"Naturaleza del chacra"} 
                    status={true}
                />}
                { (character?.info?.classifications?.length > 0 || character?.info?.range?.length > 0) && 
                <DropDown 
                    content={{
                        "Clasificaciones" : character.info.classifications || "",
                        "Rangos" : character.info.range || ""
                    }} 
                    key="Jerarquia" 
                    title={"Jerarquia Ninja"} 
                    status={false}
                />}

                { (character?.info?.familyMembers?.length > 0 || character?.info?.familyMembers?.length > 0) && 
                <DropDown 
                    content={{
                        "Familiares" : character.info.familyMembers || "",
                        "Colegas" : character.info.teamMates || ""
                    }} 
                    key="Compañeros" 
                    title={"Compañeros"} 
                    status={false}
                />}

                { (character?.header?.alias?.length > 0 || character?.info?.teams?.length > 0) && 
                <DropDown 
                    content={{
                        'Integrar' : character.info.teams,
                        Alias : character.header.alias
                    }} 
                    key="Alias" 
                    title={"Conocido por"} 
                    status={false}
                />}
                { character?.info?.weapons?.length > 0 && 
                <DropDown 
                    content={{
                        '' : character.info.weapons,
                    }} 
                    key="weapons" 
                    title={"Herramientas"} 
                    status={false}
                />}
                { character?.info?.jutsus?.length > 0 && 
                <DropDown 
                    content={{
                        '' : character.info.jutsus,
                    }} 
                    key="jutsus" 
                    title={"Arte ninja"} 
                    status={false}
                />}
            </section>
            <SectionWrapper 
                content={character.information}
            />
        </>
    );
}
export default character;


export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/character/${params.name}`)
    const character = await res.json()

    console.log(character.header.name,"param:", params.name);
    return {
            props: {
                character,
        },
    }
}
export async function getStaticPaths() { 
    const res = await fetch('http://localhost:3000/api/character/')
    const character = await res.json()
    const paths = character.map((character) => ({
        params: { name : toSnakeCase(character.header.name.toString()) }
    }))
    // console.log(paths);
    return{
        paths,
        fallback: true
    }

}

// export async function getServerSideProps({ params }) {

//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('http://localhost:3000/api/character')
//     const character = await res.json()
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//             props: {
//                 character,
//         },
//     }
//   }

