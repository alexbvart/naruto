import Title from '../../Shares/Title';
import Figure from '../Figure';
import CarouselOfHeaderImages from './CarouselOfHeaderImages';

import {main,image_header, backDirection,header_info,alias} from './hero.module.css'
import Paragraph from 'Shares/Paragraph';
import Span from 'Shares/Span/Span';
import { BackArrow } from 'icon/BackArrow';
import { useRouter } from 'next/router';
import { isEmpty } from 'utils/isEmpty';

const Hero = ({header}) => {
    const router = useRouter()
    let srcImage = !isEmpty(header.photos) ? header.photos : header.img
    srcImage = Array.isArray(srcImage) ?  srcImage :[srcImage]
    return ( 
        <article className={main}>
            <CarouselOfHeaderImages items={srcImage} />

            <div className={header_info}>
                <div>
                    {header?.alias?.length > 0 && 
                        <Span className={alias}> {header.alias[0]}</Span>
                    }
                    { header?.name && <Title>{header?.name}</Title> }
                    {header?.affiliation?.length > 0 && 
                        <Paragraph>{header?.affiliation[0].affiliationName}</Paragraph>
                    }
                </div>
                <div className={backDirection}>
                    <BackArrow onClick={() => router.back()}/>
                </div>
            </div> 
        </article>
    );
}
export default Hero;