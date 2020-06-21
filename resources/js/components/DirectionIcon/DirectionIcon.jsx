import React from 'react'
import Increase from '-assets/img/increase.svg'
import Decrease from '-assets/img/decrease.svg'

const DirectionIcon = ({ size, direction }) => {
    const src = direction === 'down' ? Decrease : Increase
    return <img width={size} height={size} src={src} />
}

export default DirectionIcon
