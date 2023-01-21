import Title from '../../Shares/Title';
import Figure from '../Figure';
import CarouselOfHeaderImages from './CarouselOfHeaderImages';

import {main,image_header,header_info,alias} from './hero.module.css'
import Paragraph from 'Shares/Paragraph';
import Span from 'Shares/Span/Span';

const Hero = ({header}) => {
    return ( 
        <article className={main}>
            <CarouselOfHeaderImages items={header.photos.length} >
                { (header?.photos && header?.photos?.length > 0 ) &&
                header.photos
                    .filter((image) => image !== null)
                    .map((image,index)=>(
                    // (image !== null) && (
                    <Figure 
                        key={index}
                        src={image} 
                        className={image_header} 
                        height={700} 
                        borderRadius={false}/>)
            )}
            </CarouselOfHeaderImages>

            <div className={header_info}>
                {header?.alias?.length > 0 && 
                    <Span className={alias}> {header.alias[0]}</Span>
                }
                { header?.name && <Title>{header?.name}</Title> }
                {header?.affiliation?.length > 0 && 
                    <Paragraph>{header?.affiliation[0].affiliationName} </Paragraph>
                }
            </div> 
        </article>
    );
}
export default Hero;