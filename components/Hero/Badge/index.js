import Image from 'next/image'
import H3 from '../../../Shares/H3';
import Paragraph from '../../../Shares/Paragraph';

import {badge} from './badge.module.css'

const Badge = ({text, url}) => {

    return ( 
        <>
            <article className={badge}>
                <figure>
                    {url &&
                        <Image 
                            src={url}
                            alt={text}
                            width={24}
                            height={24}
                            quality={100}
                            objectFit
                            placeholder='blur'
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