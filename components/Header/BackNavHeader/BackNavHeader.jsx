import { useRouter } from 'next/router'

import Paragraph from 'Shares/Paragraph'
import { BackArrow } from 'icon/BackArrow'
import {backNavHeader,hidden} from './backNavHeader.module.css'
import useScrollPosition from 'hooks/useScrollPosition'

export const BackNavHeader = ({title}) => {
    const router = useRouter()
    const scrollPosition = useScrollPosition();
    const classHeader = scrollPosition < 1000 ? `${backNavHeader} ${hidden}` : `${backNavHeader} `;
  return (
    <div className={classHeader}>
        <BackArrow onClick={() => router.back()} />
        <Paragraph>{title}</Paragraph>
    </div>
  )
}
