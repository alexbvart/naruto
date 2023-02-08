import { isEmpty } from "utils/isEmpty";

export const useImage = ({src, min='18', max='600'}) => {
    // console.log(src);
    if (isEmpty(src)) {
        return { 
            lowQuality: 'https://i.postimg.cc/c1Kjpkt3/not-fount.png', 
            highQuality: 'https://i.postimg.cc/c1Kjpkt3/not-fount.png'
        }
    }
    const regex = /\/scale-to-width-down\/[0-9]+\?/g;

    if (typeof src  === 'object') {
        src = src.src
        let lowQuality = src.replace(regex,`/scale-to-width-down/${min}?`)
        lowQuality = `/_next/image?url=${encodeURIComponent(lowQuality)}&w=640&q=10`
        // blurDataURL={`${process.env.APP_URL}/_next/image?url=${encodeURIComponent(lowQuality)}&w=640&q=10`}
    
        const highQuality = src.replace(regex,`/scale-to-width-down/${max}?`)
        return { lowQuality, highQuality}
    }
    let lowQuality = src.replace(regex,`/scale-to-width-down/${min}?`)
    lowQuality = `/_next/image?url=${encodeURIComponent(lowQuality)}&w=640&q=10`
    // blurDataURL={`${process.env.APP_URL}/_next/image?url=${encodeURIComponent(lowQuality)}&w=640&q=10`}

    const highQuality = src.replace(regex,`/scale-to-width-down/${max}?`)
    return { lowQuality, highQuality}
}
