export const isEmpty = (arg) => {
    // console.log(arg);
    if (arg === undefined) {
        return true
    }
    if (arg === null) {
        return true
    }
    if (Array.isArray(arg) && arg.length <= 1) {
        // Si es un array con un objeto vacio
        if (arg[0] === undefined) {
            return true
        }
        if (arg[0] === null) {
            return true
        }
        // Si es un array con un objeto vacio
        if (typeof arg[0] === 'object'){ 
            if (Object.entries(arg[0]).length === 0) {
                return true
            }
        }
    }
    // Si es un objeto vacio
    if (typeof arg === 'object'){ 
        if(Object.entries(arg).length === 0) {
            return true
        }
    }
    // Si es un array o string vacio true, sino false
    return !arg.length
}
