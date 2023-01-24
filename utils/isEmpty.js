export const isEmpty = (arg) => {
    // console.log(arg);
    if (arg === undefined) {
        return true
    }
    return !arg.length
}
