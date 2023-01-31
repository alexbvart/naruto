import Subtitle from "Shares/Subtitle"
import Badge from "../Badge"
import {badgeContainer,badgeItem} from './recommendations.module.css'
export const Recommendations = ({ recommendations }) => {
    return (
        <>
            <Subtitle>Explora</Subtitle>
            <div className={badgeContainer}>
                {recommendations &&
                    recommendations.map(r => (
                        <div className={badgeItem}>
                            <Badge text={r.text} url={r.url} width={40} height={40} />
                        </div>
                    ))
                }
            </div>

        </>
    )
}
