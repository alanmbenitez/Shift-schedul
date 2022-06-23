import React from 'react'
import { mdiWeatherSunny,mdiWeatherSunsetDown,mdiWeatherNight   } from '@mdi/js'
import Icon from '@mdi/react'

const ShiftIcon = ({ shiftIcon }) => {
    switch (shiftIcon) {
        case 'morning':
            return <Icon path={mdiWeatherSunny} size={1} color='#29334F' />
        case 'evening':
            return <Icon path={mdiWeatherSunsetDown } size={1} color='#29334F' />
        case 'afternoon':
            return <Icon path={mdiWeatherNight} size={1} color='#29334F' />
        default:
            break;
    }

}

export default ShiftIcon