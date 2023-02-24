import useScrollPosition from 'hooks/useScrollPosition'
import { ActivityPending } from 'icon/ActivityPending'
import { Logo } from 'icon/Logo'
import { SearchIcon } from 'icon/SearchIcon'
import { header, headerUp, icon_button, bg_hard, header_icons, hidden } from './header.module.css'

export const Header = () => {
    const scrollPosition = useScrollPosition();
    const classHeader = scrollPosition > 1000 ? `${header} ${bg_hard}` : `${header} `;
    return (
        <div className={`${classHeader} `}>
            <div className={headerUp}>
                <div className={ scrollPosition > 1000 ? hidden : ''}>
                    <Logo />
                </div>
                <div className={header_icons}>
                    <div className={icon_button}><SearchIcon /></div>
                    <div className={icon_button}><ActivityPending /></div>
                </div>
            </div>
        </div>
    )
}
