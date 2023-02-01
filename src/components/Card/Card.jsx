import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'


const Card = (props) => {
    const [expanded, setExpanded] = React.useState(false)

    return (
        <AnimateSharedLayout>
            {expanded ?
                // <ExpandededCard /> :
                ('Expanded') :
                < CompactCard param={props} set />}
        </AnimateSharedLayout>
    )
}



//Compact Card
function CompactCard({ param }) {
    const Png = param.png
    return (
        <div className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}

                />
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