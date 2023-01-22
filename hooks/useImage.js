export const useImage = ({src, min='18', max='600'}) => {
    const regex = /\/scale-to-width-down\/[0-9]+\?/g;
    const lowQuality = src.replace(regex,`/scale-to-width-down/${min}?`)
    const highQuality = src.replace(regex,`/scale-to-width-down/${max}?`)
    return { lowQuality, highQuality}
}
