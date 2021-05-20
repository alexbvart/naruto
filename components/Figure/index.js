import Image from 'next/image'
import {figure_wrapper,figcaption} from './figure.module.css'

const Figure = ({src,className,description}) => {
    
    return ( 
        <figure className={`${className} ${figure_wrapper}`}>

                <Image
                    src={src}
                    alt={description}
                    objectFit="cover"
                    quality={100}
                    width={500}
                    height={440}
                    layout="responsive"
                />
                {description&&
                    <figcaption className={figcaption}>{description}</figcaption>}

        </figure>
    );
}
export default Figure;