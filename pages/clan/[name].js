import Head from 'next/head'
import Hero from '../../components/Hero';
import {  removeAccents, toSnakeCase } from 'utils/formatTitles';
import { AbstractSection, MiniInfo } from 'components/SectionWrapper/Section';
import DropDown from 'components/SectionWrapper/DropDown';
import SectionWrapper from '../../components/SectionWrapper';


const character = ({character}) => {
    const { name, abstract, affiliation, kekkeiGenkai, element  } = character?.header
    const { members, jutsus } = character?.info
    // console.log({name, clan, range, birth, age});
    return ( 
        <>
            <Head>
                <title>{character.header.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#171516" />
            </Head>
            <Hero header={character.header} />
            <section className={"wrapper_margin_globals"}>
            {/* {   
                (   !isEmpty(clan) ) && 
                <MiniInfo 
                    clan={ clan?.length > 0 && clan[0].clanName} 
                />
            }  */}
                <AbstractSection content={abstract} title={"Resumen"} />

                
                { ( !isEmpty(affiliation)) && 
                <DropDown 
                    content={{
                        "Alistamiento" : affiliation || "",
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
                
                { (!isEmpty(members)) && 
                <DropDown 
                    content={{
                        "Miembros" : { body:members, src:'character' } || "",
                        // "Familiares" : familyMembers || "",
                        // "Colegas"    : {body: teamMates, src:'character'} || ""
                    }} 
                    key="Miembros" 
                    title={"Miembros"} 
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
                content={character.info.information}
            />
        </>
    );
}
export default character;

import fsPromises from 'fs/promises';
import path from 'path'
import { BackNavHeader } from 'components/Header/BackNavHeader/BackNavHeader';
import { isEmpty } from 'utils/isEmpty';

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'json/clans.json');
  const jsonData = await fsPromises.readFile(filePath);
  const characters = JSON.parse(jsonData);

  const character = characters.find((p) => removeAccents(p.header.name) === params.name)


  return {
    props: {character}
  }
}
export async function getStaticPaths() { 
    const filePath = path.join(process.cwd(), 'json/clans.json');
    const jsonData = await fsPromises.readFile(filePath);
    const character = JSON.parse(jsonData);
    // console.log(character);
    // character.map((character) => {
    //     console.log(character.header.name.toString(), "...", removeAccents(character.header.name.toString()))
    // })
    const paths = character.map((character) => ({
        // params: { name : toSnakeCase(character.header.name.toString()) }
        params: { name : removeAccents(character.header.name.toString()) }
    }))
    return{
        paths,
        // fallback: false
        fallback: true
    }
}