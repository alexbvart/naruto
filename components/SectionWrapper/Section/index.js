import Paragraph from 'Shares/Paragraph';
import Subtitle from '../../../Shares/Subtitle';
import Figure from '../../Figure';
import {section,images_grid,rellenuto} from './section.module.css'

const Section = ({content,children}) => {
    if(Array.isArray(content)){
        return (
        <>  {children} <br/>
            {content.map((twoLevel)=>(               
                <>
                    
                    {twoLevel.backfill 
                        ? <Backfill body={twoLevel}/>
                        : <OneSection content={twoLevel} key={twoLevel.title||content.paragraph} />
                    }
                </>
            ))}
        </>
        );
    }else{
        return ( <OneSection content={content} key={content.title||content.paragraph}/> );
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
                    content.paragraph.map((paragraph,index)=>(
                        <><Paragraph key={index}> {paragraph} </Paragraph> <br/></>
                    ))
                }
                
                { (content.images &&  content.images.length > 0) &&
                    <div className={images_grid}>
                        {content.images && 
                            content.images.map((img,index)=>(
                                <>
                                {img.url && 
                                    <Figure src={img.url}  description={img.description} key={index}/> 
                                }
                                </>
                            ))
                        }
                    </div>
                }
            </section>
        </>
    );
}


const Backfill = ({body}) => {
    return ( 
        <> 
            {Array.isArray(body.backfill) && 
                <> 
                    {body.backfill.map((threeLevel,index)=>( 
                        <OneSection content={threeLevel}  className={rellenuto} key={threeLevel.title}/> 
                    ))}
                </>
            }
        </>
    )
}