import Arrow from 'assets/Arrow';
import Badge from 'components/Hero/Badge';
import React, {useState} from 'react';
import H3 from 'Shares/H3';
import Paragraph from 'Shares/Paragraph';
import Subtitle from 'Shares/Subtitle';
import { toTitleCase } from 'utils/formatTitles';
import {drop_down,dropdown_header,icon_select_false, icon_select_true,pd_0,wrapper_down,wrapper_down_active,card_data, hidden} from './dropdown.module.css'

const DropDown = ({title,content,status=false}) => {

    const [drop, setDrop] = useState(status)
    
    let keysBody = Object.keys(content);
    // console.log(content)
    return ( 
        <section className={drop_down} >
            <header className={dropdown_header} onClick={()=>setDrop(!drop)}>
                <Subtitle className={pd_0}>{title}</Subtitle>
                <div 
                    className={`${drop ? icon_select_true : icon_select_false}`}
                > 
                    <Arrow />
                </div>
            </header>
            <div className={` ${drop ? wrapper_down_active : wrapper_down}`}>
                {   keysBody.length > 0 &&
                    keysBody.map((keyB,index)=>(
                        <CardData key={`${keyB}_${index}`} title={keyB} body={content[keyB]}/>
                    ))
                }
            </div>
            
        </section>
    );
}
export default DropDown;

const CardData = ({title,body}) => {
    // console.log(body);
    if (body?.length>0 && body!==null) {    
        return ( 
            <article className={card_data} key={`${title}___#`}> 
                <H3>{toTitleCase(title)}</H3>
                
                {Array.isArray(body) ? 
                        body.map((b,index)=>(
                            
                            <> {
                                    typeof b === 'string' 
                                    ? <Paragraph key={`${title}__${index+1}`} >{b}</Paragraph> 
                                    : <Badge key={`${title}__${index+1}`}  text={Object.values(b)[0]} url={Object.values(b)[1]} />
                                } 
                            </>
                        ))
                        :<Paragraph key={`${title}__01`} >{body}</Paragraph>
                }
            </article>
        );
    }else{
        return <p className={hidden}>no me vere</p>
    }  
}
