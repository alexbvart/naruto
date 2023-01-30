import useScrollPosition from 'hooks/useScrollPosition'
import { ActivityPending } from 'icon/ActivityPending'
import { Logo } from 'icon/Logo'
import { SearchIcon } from 'icon/SearchIcon'
import { header, bg_hard, header_icons } from './header.module.css'

export const Header = () => {
    const scrollPosition = useScrollPosition();
    console.log(scrollPosition);
    const classHeader = scrollPosition>1500 ? `${header} ${bg_hard}` : `${header} `;
    return (
        <div className={`${classHeader} `}>
            <div>
                <Logo />
            </div>
            <div className={header_icons}>
                <SearchIcon></SearchIcon>
                <ActivityPending />
            </div>
        </div>
    )
}
