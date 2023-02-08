import Subtitle from "Shares/Subtitle"
import Badge from "../Badge"
import {badgeContainer,badgeItem} from './recommendations.module.css'
export const Recommendations = ({ recommendations }) => {
    return (
        <>
            <Subtitle>Explora</Subtitle>
            <div className={badgeContainer}>
                {recommendations &&
                    recommendations.map((r,index) => (
                        <div className={badgeItem} key={`${r.text}_${index}`}>
                            <Badge text={r.text} url={r.url} width={40} height={40} />
                        </div>
                    ))
                }
            </div>

        </>
    )
}
