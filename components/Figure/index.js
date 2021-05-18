import Image from 'next/image'

const Figure = ({src,className,description}) => {
    console.log(src);

    return ( 
        <figure className={className}>

                <Image
                    src={src}
                    alt={description}
                    objectFit="cover"
                    layout="responsive"
                    quality={100}
                    width={500}
                    height={500}
                />
                <figcaption>{description}</figcaption>

        </figure>
    );
}
export default Figure;