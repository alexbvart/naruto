import Head from 'next/head'

const Character = ({ characters }) => {
    return (
        <>
            <Head>
                <title>Personajes</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#171516" />
            </Head>
            <div className={"wrapper_margin_globals"}>  
                <Title>Personajes del anime</Title>
                <GridCharacter characters={characters} />
            </div>
        </>

    )
}

export default Character

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
import Subtitle from 'Shares/Subtitle';
import Title from 'Shares/Title';
import Figure from 'components/Figure';
import { GridCharacter } from 'components/GridCharacter/GridCharacter';

export async function getStaticProps() {
    //   const filePath = path.join(process.cwd(), 'json/character.json');
    const filePath = path.join(process.cwd(), 'json/pathCharacter.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return {
        props: { characters: objectData }
    }
}