export const isEmpty = (arg) => {
    // console.log(arg);
    if (arg === undefined) {
        return true
    }
    if (arg === null) {
        return true
    }
    // Si es un array con un objeto vacio
    if (Array.isArray(arg) && arg.length > 0 && Object.entries(arg[0]).length === 0) {
        return true
    }
    // Si es un objeto vacio
    if (Object.entries(arg).length === 0) {
        return true
    }
    // Si es un array o string vacio true, sino false
    return !arg.length
}
