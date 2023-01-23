import Link from 'next/link'
import { toSnakeCase } from 'utils/formatTitles';

const Character = ({characters}) => {
    return (
        <>
            { characters.length > 0 &&
                characters.map( (character) => 
                        <Link href={`/character/${toSnakeCase(character.name.toString())}`} >
                            <p>
                                {character.name}
                            </p> 
                        </Link>
                )
            }
        </>
    )
}

export default Character

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'

export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'json/character.json');
  const filePath = path.join(process.cwd(), 'json/pathCharacter.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {
    props: {characters : objectData}
  }
}