import Head from 'next/head'
import Hero from '../../components/Hero';
import {  removeAccents, toSnakeCase } from 'utils/formatTitles';
import { AbstractSection, MiniInfo } from 'components/SectionWrapper/Section';
import DropDown from 'components/SectionWrapper/DropDown';
import SectionWrapper from '../../components/SectionWrapper';


const Village = ({village}) => {
    const { name, abstract, nation, img  } = village?.header
    const { founders, cofounders, leaders, clans, information } = village?.info
    return ( 
        <>
            <Head>
                <title>{name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#171516" />
            </Head>
            <Hero header={village.header} />
            <section className={"wrapper_margin_globals"}>
            {/* {   
                (   !isEmpty(clan) ) && 
                <MiniInfo 
                    clan={ clan?.length > 0 && clan[0].clanName} 
                />
            }  */}
                <AbstractSection content={abstract} title={"Resumen"} />

                
                { ( !isEmpty(nation)) && 
                <DropDown 
                    content={{
                        "" : nation || "",
                    }} 
                    key="Nation" 
                    title={"Nación"} 
                    status={true}
                />}

                
                { (!isEmpty(founders) || !isEmpty(leaders) || !isEmpty(cofounders) ) && 
                <DropDown 
                    content={{
                        "Fundador" :  { body:founders, src:'character' } || "",
                        "CoFundador" : { body:cofounders, src:'character' } || "",
                        "Lider" :    leaders || "",
                    }} 
                    key="Dirigente" 
                    title={"Dirigente"} 
                    status={false}
                />}
                { (!isEmpty(clans)) && 
                <DropDown 
                    content={{
                        "" :  { body:clans, src:'clan' } || "",
                    }} 
                    key="Clanes" 
                    title={"Clanes"} 
                    status={false}
                />}

            </section>
            <BackNavHeader title={name}/>
            <SectionWrapper 
                content={information}
            />
        </>
    );
}
export default Village;

import fsPromises from 'fs/promises';
import path from 'path'
import { BackNavHeader } from 'components/Header/BackNavHeader/BackNavHeader';
import { isEmpty } from 'utils/isEmpty';

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'json/villages.json');
  const jsonData = await fsPromises.readFile(filePath);
  const villages = JSON.parse(jsonData);

  const village = villages.find((p) => removeAccents(p.header.name) === params.name)
  return {
    props: {village}
  }
}
export async function getStaticPaths() { 
    const filePath = path.join(process.cwd(), 'json/villages.json');
    const jsonData = await fsPromises.readFile(filePath);
    const team = JSON.parse(jsonData);
    // console.log(team);
    // team.map((team) => {
    //     console.log(team.header.name.toString(), "...", removeAccents(team.header.name.toString()))
    // })
    const paths = team.map((village) => ({
        params: { name : removeAccents(village.header.name.toString()) }
    }))

    return{
        paths,
        fallback: false
        // fallback: true
    }
}