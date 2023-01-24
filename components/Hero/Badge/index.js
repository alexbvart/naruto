import { useImage } from 'hooks/useImage';
import Image from 'next/image'
import H3 from '../../../Shares/H3';
import Paragraph from '../../../Shares/Paragraph';

import {badge} from './badge.module.css'

const Badge = ({text, url}) => {
    const {lowQuality, highQuality} = useImage({src:url, max:"300"})

    return ( 
        <>
            <article className={badge}>
                <figure>
                    {url &&
                        <Image 
                            src={highQuality}
                            alt={text}
                            width={24}
                            height={24}
                            quality={100}
                            objectFit
                            // placeholder='blur'
                            // blurDataURL={`${process.env.APP_URL}/_next/image?url=${encodeURIComponent(lowQuality)}&w=640&q=10`}
                        />
                    }
                </figure>
                <span>
                    <Paragraph>{text}</Paragraph>
                </span>
            </article>
        </>
    );
}
export default Badge;