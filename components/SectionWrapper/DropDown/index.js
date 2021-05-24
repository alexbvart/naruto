import Arrow from 'assets/Arrow';
import React, {useState} from 'react';
import H3 from 'Shares/H3';
import Paragraph from 'Shares/Paragraph';
import Subtitle from 'Shares/Subtitle';
import {drop_down,dropdown_header,icon_select_false, icon_select_true,pd_0,wrapper_down,wrapper_down_active,card_data} from './dropdown.module.css'

const DropDown = ({title,content,status=false}) => {

    const [drop, setDrop] = useState(status)
    console.log(drop);

    let keysBody = Object.keys(content);
    /*let valuesBody =  Object.values(content);
     console.log({valuesBody},"___",{keysBody}); */
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
                {    
                    keysBody.map((keyB)=>(
                        <CardData title={keyB} body={content[keyB]}/>
                    ))
                }
            </div>
            
        </section>
    );
}
export default DropDown;

const CardData = ({title,body}) => {

    if (body.length>0 && body!==null) {    
        return ( 
            <article className={card_data}> 
                <H3>{title}</H3>
                
                {Array.isArray(body) ? 
                        body.map((b)=>( 
                            <> { b &&
                                    <Paragraph>{b}</Paragraph> 
                            } </>
                        ))
                        :<Paragraph>{body}</Paragraph>
                }___
            </article>
        );
    }else{
        return null
    }  
}
