import React from 'react'
import Icon from '@mdi/react';
import './time-bar.styles.scss'
import { mdiChevronRight } from '@mdi/js';
import { mdiChevronLeft } from '@mdi/js';

const TimeBar = ({rangeDate}) => {
    return (
        <div className='bar-container'>
            <Icon className='iconArrow' path={mdiChevronLeft} size={1} color='#29334F' />  {rangeDate}  <Icon className='iconArrow' path={mdiChevronRight} size={1} color='#29334F' />
        </div>

    )
}

export default TimeBar