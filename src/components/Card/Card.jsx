import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'


const Card = (props) => {
    const [expanded, setExpanded] = React.useState(false)

    return (
        <AnimateSharedLayout>
            {expanded ?
                // <ExpandedCard /> :
                ('Expanded') :
                < CompactCard param={props} set />}
        </AnimateSharedLayout>
    )
}



//Compact Card
function CompactCard({ param }) {
    const Png = param.png
    return (
        <div className="CompactCard">
            <div className="radialBar">
                Chart
            </div>
            <div className="detail">
                <Png />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )

}

export default Card;