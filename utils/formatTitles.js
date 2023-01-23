export const toSnakeCase = (string) => 
    string &&
    string
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map( x => x.toLowerCase())
        .join('_')

export const toKebabCase = (string) => 
    string &&
    string
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map( x => x.toLowerCase())
        .join('-')

export const toCamelCase = (string) => 
    string &&
    string
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())

export const toPascalCase = (string) => 
    string &&
    string
        .replace(/\w\S*/g, (m) => m.charAt(0).toUpperCase() 
                                + m.substr(1).toLowerCase())

export const  capitalizarPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const toTitleCase = (string) => {
    return string &&
    string
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map( x => x.toLowerCase())
        .join(' ')
        .replace(/\w\S*/g, (m) => m.charAt(0).toUpperCase() 
                                + m.substr(1).toLowerCase())
}

export const toTextCase = (string) => {
    return string &&
        string
            // .replace(/\d+/g, '')
            // .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()[]]/g,"")
            .replace(/\[[0-9]+\]/g, '')
            // .replace(/\[1]\[2]\[3]\[4]/g, '')
}

export const toText2Case = (string) => {
    return string &&
        string
            .replace(/\[\]/g,'')
            .replace('[','')
            // .replace(']','')
}

// export const toLatinCase = (string) => {
//     return string &&
//             greekUtils.toLatin(string).replace('','-')
// }

export const removeAccents = (string) => {
    return string &&
        string
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace("'",'')
            .replaceAll(" ",'-')
            .toLowerCase()
} 
