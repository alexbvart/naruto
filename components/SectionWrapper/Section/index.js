import React, {useState} from 'react';
import Subtitle from '../../../Shares/Subtitle';
import Figure from '../../Figure';
import {section,images_grid,rellenuto} from './section.module.css'

const Section = ({content,children}) => {
    console.log(content);

    if(Array.isArray(content)){
        return ( 
        <> {children} <br/>
            {content.map((twoLevel)=>(               
                <>
                    <OneSection content={twoLevel} />

                    {Array.isArray(twoLevel.relleno) && 
                        <> 
                            <Subtitle>Sagas de Relleno</Subtitle>
                            {twoLevel.relleno.map((threeLevel)=>( 
                                <OneSection content={threeLevel}  className={rellenuto}/> 
                            ))}
                        </>
                    }

                </>

            ))}
        </>
        );
    }else{
        return ( <OneSection content={content}/> );
    }

    
}
export default Section;



const OneSection = ({content,className}) => {
    return ( 
        <>
            <section className={`${section} ${className}`}>
                {content.title && 
                    <Subtitle>{content.title}</Subtitle>
                }

                {content.paragraph && 
                    content.paragraph.map((paragraph)=>(
                        <><p>{paragraph}</p> <br/></>
                    ))
                }
                <div className={images_grid}>
                    {content.images && 
                        content.images.map((img)=>(
                            <><Figure src={img.url}  description={img.description}/> {/* {console.log({img})} */}</>
                        ))
                    }
                </div>
            </section>
        </>
    );
}
