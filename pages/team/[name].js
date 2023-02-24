import Head from 'next/head'
import Hero from '../../components/Hero';
import {  removeAccents, toSnakeCase } from 'utils/formatTitles';
import { AbstractSection, MiniInfo } from 'components/SectionWrapper/Section';
import DropDown from 'components/SectionWrapper/DropDown';
import SectionWrapper from '../../components/SectionWrapper';


const team = ({team}) => {
    const { name, abstract, affiliation, kekkeiGenkai, element  } = team?.header
    const { members, leaders, jutsus } = team?.info
    // console.log({name, clan, range, birth, age});
    return ( 
        <>
            <Head>
                <title>{team.header.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#171516" />
            </Head>
            <Hero header={team.header} />
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
                
                { (!isEmpty(members) || !isEmpty(leaders)) && 
                <DropDown 
                    content={{
                        "Lideres" :    { body:leaders, src:'character' } || "",
                        "Miembros" : { body:members, src:'character' } || "",
                        // "Familiares" : familyMembers || "",
                        // "Colegas"    : {body: teamMates, src:'team'} || ""
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
                content={team.info.information}
            />
        </>
    );
}
export default team;

import fsPromises from 'fs/promises';
import path from 'path'
import { BackNavHeader } from 'components/Header/BackNavHeader/BackNavHeader';
import { isEmpty } from 'utils/isEmpty';

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'json/teams.json');
  const jsonData = await fsPromises.readFile(filePath);
  const teams = JSON.parse(jsonData);

  const team = teams.find((p) => removeAccents(p.header.name) === params.name)


  return {
    props: {team}
  }
}
export async function getStaticPaths() { 
    const filePath = path.join(process.cwd(), 'json/teams.json');
    const jsonData = await fsPromises.readFile(filePath);
    const team = JSON.parse(jsonData);
    // console.log(team);
    // team.map((team) => {
    //     console.log(team.header.name.toString(), "...", removeAccents(team.header.name.toString()))
    // })
    const paths = team.map((team) => ({
        params: { name : removeAccents(team.header.name.toString()) }
    }))

    return{
        paths,
        fallback: false
        // fallback: true
    }
}