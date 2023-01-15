import Subtitle from '../../Shares/Subtitle';
import Title from '../../Shares/Title';
import Figure from '../Figure';
import NinjaBadge from './NinjaBadge';
import CarouselOfHeaderImages from './CarouselOfHeaderImages';

import {main,image_header,header_info,alias} from './hero.module.css'
import Paragraph from 'Shares/Paragraph';
import Span from 'Shares/Span/Span';

const Hero = ({header}) => {
    return ( 
        <article className={main}>

            <CarouselOfHeaderImages items={header.headerImages.length} >
                {header.headerImages.map((image,index)=>(
                    <Figure 
                        key={index}
                        src={image} 
                        className={image_header} 
                        height={700} 
                        borderRadius={false}/>
                ))}
            </CarouselOfHeaderImages>

            <div className={header_info}>
                {header.alias && <Span className={alias}> {header.alias}</Span>}
                <Title>{header.name}</Title>
                <Paragraph>{header.affiliation} </Paragraph>
                {/* <NinjaBadge
                    affiliation={header.affiliation} 
                    affiliationUrl={header.affiliationIcon} 
                    rank={header.rank} 
                ></NinjaBadge>   */}
            </div> 
            
        </article>
    );
}
export default Hero;