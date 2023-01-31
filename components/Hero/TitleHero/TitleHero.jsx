import { BackArrow } from 'icon/BackArrow'
import { useRouter } from 'next/router'
import Paragraph from 'Shares/Paragraph'
import Span from 'Shares/Span/Span'
import Title from 'Shares/Title'
import {backDirection,header_info} from './titleHero.module.css'

export const TitleHero = ({text1, text2, text3}) => {
    const router = useRouter()
    return (
        <div className={header_info}>
            <div>
                {text1 && <Span> {text1}</Span>}
                {text2 && <Title>{text2}</Title>}
                {text3 && <Paragraph>{text3}</Paragraph>}
            </div>
            <div className={backDirection}>
                <BackArrow onClick={() => router.back()} />
            </div>
        </div>
    )
}
