import { images_grid } from './index.module.css'
import Link from 'next/link'
import { removeAccents } from 'utils/formatTitles';
import Figure from 'components/Figure';

export const GridCharacter = ({ characters }) => {
    return (
        <>
            {(characters && characters.length > 0) &&
                <div className={images_grid}>
                    {characters
                        .slice(0,10)
                        .map((c, index) =>
                        // img.url && 
                        c &&
                        (
                            // <Figure src={img.url}  description={img.description} key={index}/> 
                            <Figure src={c.photo} description={c.name} key={c.name + index} />
                        )
                    )
                    }
                </div>
            }
        </>
    )
}
