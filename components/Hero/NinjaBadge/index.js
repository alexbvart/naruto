import Image from 'next/image'
import H3 from '../../../Shares/H3';
import Paragraph from '../../../Shares/Paragraph';

import {ninjaBadge} from './ninjaBadge.module.css'

const NinjaBadge = ({affiliation,affiliationUrl,rank}) => {
    return ( 
        <>
            <article className={ninjaBadge}>
                <figure>
                    <Image 
                        src={affiliationUrl}
                        alt={affiliation}
                        width={18}
                        height={18}
                        quality={100}
                    />
                </figure>
                <span>
                    <H3>{affiliation}</H3>
                    <Paragraph>{rank}</Paragraph>
                </span>
            </article>
        </>
    );
}
export default NinjaBadge;