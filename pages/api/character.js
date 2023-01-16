import { readFile } from 'fs/promises'

const getCharacter = async (req, res) => {
    
    const file = await readFile('./rai.json', 'utf-8')
    const json = JSON.parse(file)
    // const body = JSON.parse(req.body)
    // const {input} = body;

    res.status(200).json(json)
}
export default getCharacter;