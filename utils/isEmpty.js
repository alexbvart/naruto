export const isEmpty = (arg) => {
    // console.log(arg);
    if (arg === undefined) {
        return true
    }
    if (arg === null) {
        return true
    }
    return !arg.length
}
