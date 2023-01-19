import { readFile } from 'fs/promises'
import { toSnakeCase } from 'utils/formatTitles'

    const getCharacter = async (req, res) => {
        //   const body = JSON.parse(req.body)
        const { name } = req.query
        const file = await readFile('./character.json', 'utf-8')
        const json = JSON.parse(file)

        const person = json.find((p) => toSnakeCase(p.header.name) === name)

        return person
            ? res.status(200).json(person)
            : res.status(404).json({ message: `User: ${name} not found.` })
    }
    export default getCharacter;