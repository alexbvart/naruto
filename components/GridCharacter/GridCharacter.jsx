import { images_grid } from './index.module.css'
import Link from 'next/link'
import { removeAccents } from 'utils/formatTitles';
import Figure from 'components/Figure';
import { CardLinkContainer } from 'Shares/CardLinkContainer';

export const GridCharacter = ({ characters, route }) => {
    return (
        <>
            {(characters && characters.length > 0) &&
                <div className={images_grid}>
                    {characters
                        .slice(0,500)
                        .map((c, index) =>
                        // img.url && 
                        c &&
                        (   
                            <Link 
                                href={`/${route}/${removeAccents(c.name)}`} 
                                passHref legacyBehavior
                                key={`${c.name}_${index}`}
                            >
                                <CardLinkContainer>
                                    <Figure 
                                        src={c.photo} 
                                        description={c.name} 
                                        key={c.name + index} 
                                        nofullScreen={false}
                                    />
                                </CardLinkContainer>
                            </Link>
                        )
                    )
                    }
                </div>
            }
        </>
    )
}
