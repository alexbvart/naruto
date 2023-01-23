import Link from 'next/link'
import { removeAccents } from 'utils/formatTitles';

const Character = ({characters}) => {
    return (
        <div className={"wrapper_margin_globals"}>  
            <Title>Personajes del anime</Title>
            { characters.length > 0 &&
                characters
                    // .slice(0, 100)
                    .map( (character) => 
                        <Link 
                            key={`/character/${removeAccents(character.name.toString())}`} 
                            href={`/character/${removeAccents(character.name.toString())}`} >
                            {/* <Subtitle> */}
                                <p>{character.name} </p>
                            {/* </Subtitle>  */}
                        </Link>
                )
            }
        </div>
    )
}

export default Character

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
import Subtitle from 'Shares/Subtitle';
import Title from 'Shares/Title';

export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'json/character.json');
  const filePath = path.join(process.cwd(), 'json/pathCharacter.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {
    props: {characters : objectData}
  }
}