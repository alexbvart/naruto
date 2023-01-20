import path from 'path';
import { promises as fs } from 'fs';
import { toSnakeCase } from 'utils/formatTitles'

    const getCharacter = async (req, res) => {
        //   const body = JSON.parse(req.body)
        const { name } = req.query

        const jsonDirectory = path.join(process.cwd(), 'json');
        const fileContents = await fs.readFile(jsonDirectory + '/character.json', 'utf8');
        // const file = await readFile('./character.json', 'utf-8')
        const json = JSON.parse(fileContents)

        const person = json.find((p) => toSnakeCase(p.header.name) === name)

        return person
            ? res.status(200).json(person)
            : res.status(404).json({ message: `User: ${name} not found.` })
    }
    export default getCharacter;