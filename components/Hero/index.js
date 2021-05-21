import Subtitle from '../../Shares/Subtitle';
import Title from '../../Shares/Title';
import Figure from '../Figure';
import NinjaBadge from './NinjaBadge';
import CarouselOfHeaderImages from './CarouselOfHeaderImages';

import {main,image_header,header_info,alias} from './hero.module.css'
const Hero = ({header}) => {
    console.log({header});
    return ( 
        <article className={main}>

            <CarouselOfHeaderImages items={header.headerImages.length} >
                {header.headerImages.map((image)=>(
                    <Figure src={image} className={image_header} height={700} borderRadius={false}/>
                ))}
            </CarouselOfHeaderImages>

            <div className={header_info}>
                <Title>{header.name}</Title>
                <Subtitle className={alias}> {header.alias}</Subtitle>
                <NinjaBadge
                    affiliation={header.affiliation} 
                    affiliationUrl={header.affiliationIcon} 
                    rank={header.rank} 
                ></NinjaBadge>  
            </div> 
            
        </article>
    );
}
export default Hero;