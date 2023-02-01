import Head from 'next/head'

const characterRecommendations = [
    {
        text: "10 mas poderosos",
        url: "https://static.wikia.nocookie.net/naruto/images/b/bc/Madara_Uchiha_Anime.png/revision/latest/scale-to-width-down/1000?cb=20180901190100&path-prefix=es",
    },
    {
        text: "11 de konoha",
        url: "https://static.wikia.nocookie.net/naruto/images/9/91/Once_de_Konoha.png/revision/latest/scale-to-width-down/1000?cb=20150715021636&path-prefix=es",
    },
    {
        text: "Akatsuki",
        url: "https://static.wikia.nocookie.net/naruto/images/6/63/Akatsuki_alternativo.png/revision/latest/scale-to-width-down/1000?cb=20191022025138&path-prefix=es",
    },
]
const Character = ({ characters }) => {
    console.log(characters);
    return (
        <>
            <Head>
                <title>Clanes</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#171516" />
            </Head>
            <div className={"wrapper_margin_globals gap_layout_header"}>
                <div className='header_space'></div>
                <Recommendations recommendations={characterRecommendations} />
                <TitleHero
                    text1="Explora todos los"
                    text2="Clanes"
                    text3="de la serie"
                />
                <BackNavHeader title="Clanes" />
                <GridCharacter characters={characters} route="clan" />
            </div>
        </>

    )
}

export default Character

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
import { GridCharacter } from 'components/GridCharacter/GridCharacter';
import { TitleHero } from 'components/Hero/TitleHero/TitleHero';
import { Recommendations } from 'components/Hero/Recommendations/Recommendations';
import { BackNavHeader } from 'components/Header/BackNavHeader/BackNavHeader'

export async function getStaticProps() {
    //   const filePath = path.join(process.cwd(), 'json/character.json');
    const filePath = path.join(process.cwd(), 'json/clans.json');
    const jsonData = await fsPromises.readFile(filePath);
    let objectData = JSON.parse(jsonData);

    objectData = objectData.map((data)=>{
        return data && {
            name: data.header.name,
            photo: data.header.img || ''
        }
    })
    return {
        props: { characters: objectData }
    }
}