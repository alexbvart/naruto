import Paragraph from 'Shares/Paragraph';
import Span from 'Shares/Span/Span';
import Title from 'Shares/Title';
import Subtitle from '../../../Shares/Subtitle';
import Figure from '../../Figure';
import {section,images_grid,rellenuto,abstractSection,miniInfo} from './section.module.css'

export const Section = ({content,children}) => {
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




export const OneSection = ({content,className, title}) => {
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
                <>  <Title>Sagas de relleno</Title> <br/><br/>
                    {body.backfill.map((threeLevel,index)=>( 
                        <OneSection content={threeLevel}  className={rellenuto} key={threeLevel.title}/> 
                    ))}
                </>
            } <br/>
        </>
    )
}


export const AbstractSection = ({content,className, title}) => {
    return ( 
        <>
            <section className={`${abstractSection} ${className}`}>
                {title && 
                    <Subtitle>{title}</Subtitle>
                }
                
                {content && 
                    <Paragraph > {content} </Paragraph>
                }
            </section>
        </>
    );
}
export const MiniInfo = ({clan,range,birth,age,className}) => {
    console.log(clan,range,birth,age);
    return ( 
        <>
            <section className={`${miniInfo} ${className}`}>
                
                <Span> 
                    {clan?.length>0 && <>{`${clan}, `}</>  }
                    {range?.length>0 && <>{`${range}, `}</>  }
                    {birth?.length>0 && <>{`${birth}, `}</>  }
                    {age?.length>0 && <>{age} </> }
                </Span>
                
            </section>
        </>
    );
}
