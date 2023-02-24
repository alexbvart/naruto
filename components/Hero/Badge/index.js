import { useImage } from 'hooks/useImage';
import Image from 'next/image'
import React from 'react';
import H3 from '../../../Shares/H3';
import Paragraph from '../../../Shares/Paragraph';

import {badge, hover_underline_animation} from './badge.module.css'

const Badge = React.forwardRef(({onClick,text, url, width="24", height="24" }, ref) => {
    const {lowQuality, highQuality} = useImage({src:url, max:"300"})

    return ( 
        <>
            <article className={badge} ref={ref} onClick={onClick}>
                <figure>
                    {url &&
                        <Image 
                            src={highQuality}
                            alt={text}
                            width={width}
                            height={height}
                            quality={100}
                            objectFit = "cover"
                            // placeholder='blur'
                            // blurDataURL={`${process.env.APP_URL}/_next/image?url=${encodeURIComponent(lowQuality)}&w=640&q=10`}
                        />
                    }
                </figure>
                <span className={hover_underline_animation}>
                    <Paragraph>{text}</Paragraph>
                </span>
            </article>
        </>
    );
})
export default Badge;