import React, {useState} from 'react';
import Paragraph from 'Shares/Paragraph';
import Subtitle from '../../../Shares/Subtitle';
import Figure from '../../Figure';
import {section,images_grid,rellenuto} from './section.module.css'

const Section = ({content,children}) => {
    if(Array.isArray(content)){
        return ( 
        <> {children} <br/>
            {content.map((twoLevel)=>(               
                <>
                    <OneSection content={twoLevel} />
                    {twoLevel.backfill && <Backfill body={twoLevel}/>}
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
                        <><Paragraph>{paragraph}</Paragraph> <br/></>
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


const Backfill = ({body}) => {
    return ( 
        <> 
            {Array.isArray(body.backfill) && 
                <> 
                    <Subtitle>Sagas de Relleno</Subtitle>
                    {body.backfill.map((threeLevel)=>( 
                        <OneSection content={threeLevel}  className={rellenuto}/> 
                    ))}
                </>
            }
        </>
    )
}