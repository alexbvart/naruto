import path from 'path';
import { promises as fs } from 'fs';
// import { readFile } from 'fs/promises'

const getCharacter = async (req, res) => {
    
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + '/pathCharacter.json', 'utf8');
    const json = JSON.parse(fileContents)

    res.status(200).json(json)
}
export default getCharacter;