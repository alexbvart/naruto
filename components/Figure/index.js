import Image from 'next/image'
import {figure_wrapper,f_w_border_radius,figcaption} from './figure.module.css'

const Figure = ({src,className,description, height=400, borderRadius=true}) => {

    const border_radius = borderRadius ? f_w_border_radius : "";

    
    return ( 
        <figure className={`${className} ${figure_wrapper} ${border_radius}`}>

                <Image
                    src={src}
                    alt={description}
                    objectFit="cover"
                    quality={100}
                    width={500}
                    height={height}
                    layout="responsive"
                />
                {description&&
                    <figcaption className={figcaption}>{description}</figcaption>}

        </figure>
    );
}
export default Figure;