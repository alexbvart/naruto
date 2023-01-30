import { ActivityPending } from 'icon/ActivityPending'
import { Logo } from 'icon/Logo'
import { SearchIcon } from 'icon/SearchIcon'
import { header, header_icons } from './header.module.css'

export const Header = () => {
    return (
        <div className={`${header} `}>
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
