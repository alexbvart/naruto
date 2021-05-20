import React, {useState} from 'react';
import Subtitle from '../../../Shares/Subtitle';
import Figure from '../../Figure';
import {section,images_grid} from './section.module.css'
const Section = ({content}) => {
    console.log(content);
    return ( 
        <>
            <section className={section}>
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
                            <><Figure src={img.url}  description={img.description}/> {console.log({img})}</>
                        ))
                    }
                </div>
            </section>
        </>
    );
}
export default Section;