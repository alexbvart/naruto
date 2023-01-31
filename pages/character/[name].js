import Head from 'next/head'
import Hero from '../../components/Hero';
import {  removeAccents, toSnakeCase } from 'utils/formatTitles';
import { AbstractSection, MiniInfo } from 'components/SectionWrapper/Section';
import DropDown from 'components/SectionWrapper/DropDown';
import SectionWrapper from '../../components/SectionWrapper/index,';


const character = ({character}) => {
    const { birth, blood, age, height, weight, uniquePersonality,
            range, classifications, familyMembers, teamMates, teams,
            weapons, jutsus
    } = character?.info
    const { name, alias, clan, affiliation, kekkeiGenkai, element  } = character?.header
    // console.log({name, clan, range, birth, age});

    // console.log({ birth, blood, age, height, weight, uniquePersonality,
    //     range, classifications, familyMembers, teamMates, teams,
    //     weapons, jutsus, alias, clan, affiliation, kekkeiGenkai, element} );
    return ( 
        <>
            <Head>
                <title>{character.header.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#171516" />
            </Head>
            <Hero header={character.header} />
            <section className={"wrapper_margin_globals"}>
            {   
                (   clan.length > 0 ||  range.length > 0 ||  birth.length > 0 || age.length > 0) && 
                <MiniInfo 
                    clan={ clan?.length > 0 && clan[0].clanName} 
                    range={ range?.length > 0 ? range[range.length-1] : ""} 
                    birth={ birth} 
                    age={typeof age === 'string' 
                            ? age
                            : age[age.length-1] 
                        } 
                />
            } 
                <AbstractSection content={character.header.abstract} title={"Resumen"} />

                { (     birth.length > 0 || blood.length > 0 ||  age.length > 0 ||
                        height.length > 0 || weight.length > 0 ||  uniquePersonality.length > 0
                ) &&
                <DropDown 
                    content={{
                        "Nacimiento" : birth || '',
                        "Sangre" : blood || '',
                        "Edad" : age || '',
                        "Altura" : height || '',
                        "Peso" : weight || '',
                        "Habilidad unica" : uniquePersonality || '',
                    }} 
                    key="Generalidades" 
                    title={"Generalidades"} 
                    status={false}
                />
                }
                { (clan?.length > 0 || affiliation?.length > 0) && 
                <DropDown 
                    content={{
                        "Alistamiento" : affiliation || "",
                        "Clan" : clan  || ""
                    }} 
                    key="Afiliacion" 
                    title={"Afiliación"} 
                    status={true}
                />}
                { (kekkeiGenkai?.length > 0 || element?.length > 0) && 
                <DropDown 
                    content={{
                        "Elementos" : element || "",
                        "Kekkei Genkai" : kekkeiGenkai  || ""
                    }} 
                    key="Naturaleza del chacra" 
                    title={"Naturaleza del chacra"} 
                    status={true}
                />}
                { ( classifications?.length > 0 || range?.length > 0) && 
                <DropDown 
                    content={{
                        "Clasificaciones" : classifications || "",
                        "Rangos" : range || ""
                    }} 
                    key="Jerarquia" 
                    title={"Jerarquia Ninja"} 
                    status={false}
                />
                }

                { (familyMembers?.length > 0 || familyMembers?.length > 0) && 
                <DropDown 
                    content={{
                        "Familiares" : { body:familyMembers, src:'character' } || "",
                        // "Familiares" : familyMembers || "",
                        "Colegas"    : {body: teamMates, src:'character'} || ""
                    }} 
                    key="Compañeros" 
                    title={"Compañeros"} 
                    status={false}
                />}

                { (alias?.length > 0 || teams?.length > 0) && 
                <DropDown 
                    content={{
                        'Integrar' : teams,
                        Alias : alias
                    }} 
                    key="Alias" 
                    title={"Conocido por"} 
                    status={false}
                />}
                { weapons?.length > 0 && 
                <DropDown 
                    content={{
                        '' : weapons,
                    }} 
                    key="weapons" 
                    title={"Herramientas"} 
                    status={false}
                />}
                { jutsus?.length > 0 && 
                <DropDown 
                    content={{
                        '' : jutsus,
                    }} 
                    key="jutsus" 
                    title={"Arte ninja"} 
                    status={false}
                />}
            </section>
            <BackNavHeader title={name}/>
            <SectionWrapper 
                content={character.information}
            />
        </>
    );
}
export default character;

// export async function getStaticProps({ params }) {
//     const character = await fetch(`${process.env.API_URL}/character/${params.name}`)
//                         .then( res => res.json())
//                         .catch(error => console.log("||getStaticProps:: ", error))
//     // const character = await res.json()
//     console.log(character.header.name);
//     return {
//             props: {
//                 character,
//         },
//     }
// }

import fsPromises from 'fs/promises';
import path from 'path'
import { BackNavHeader } from 'components/Header/BackNavHeader/BackNavHeader';

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'json/character.json');
  const jsonData = await fsPromises.readFile(filePath);
  const characters = JSON.parse(jsonData);

  const character = characters.find((p) => removeAccents(p.header.name) === params.name)


  return {
    props: {character}
  }
}
export async function getStaticPaths() { 
    const filePath = path.join(process.cwd(), 'json/pathCharacter.json');
    const jsonData = await fsPromises.readFile(filePath);
    const character = JSON.parse(jsonData);
    // console.log(character);
    const paths = character.map((character) => ({
        // params: { name : toSnakeCase(character.header.name.toString()) }
        params: { name : removeAccents(character.name.toString()) }
    }))
    // console.log(paths);
    // character.map((character) => {
    //     console.log(character.name.toString(), "...", removeAccents(character.name.toString()))
    // })


    return{
        paths,
        fallback: false
    }
}

// export async function getStaticPaths() { 
//     const character = await fetch(`${process.env.API_URL}/characterPaths/`)
//                             .then( res => res.json())
//                             .catch(error => console.log("||getStaticPaths:: ", error))
//     // const character = await res.json()
//     // console.log(character);
//     const paths = character.map((character) => ({
//         // params: { name : toSnakeCase(character.header.name.toString()) }
//         params: { name : toSnakeCase(character.name.toString()) }
//     }))
//     // console.log(paths);
//     return{
//         paths,
//         fallback: false
//     }
// }

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

