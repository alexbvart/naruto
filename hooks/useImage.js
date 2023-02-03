export const useImage = ({src, min='18', max='600'}) => {

    if (src===undefined) {
        return { lowQuality: '', highQuality: ''}
    }
    const regex = /\/scale-to-width-down\/[0-9]+\?/g;
    let lowQuality = src.replace(regex,`/scale-to-width-down/${min}?`)
    lowQuality = `/_next/image?url=${encodeURIComponent(lowQuality)}&w=640&q=10`
    // blurDataURL={`${process.env.APP_URL}/_next/image?url=${encodeURIComponent(lowQuality)}&w=640&q=10`}

    const highQuality = src.replace(regex,`/scale-to-width-down/${max}?`)
    return { lowQuality, highQuality}
}
