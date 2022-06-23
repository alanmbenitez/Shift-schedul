import React from 'react'
import CardShift from '../../components/card-shift/card-shift.component';
import './open-shifts.styles.scss'



const OpenShifts = ({shifts, colorCard,available}) => {
    
  return (
    <div className='shifts-container'>
            {
                shifts.map((shift) => (
                    <CardShift available={available} colorCard={colorCard}key={shift.id} shift={shift}/>
                ))}

    </div>
  )
}

  
export default OpenShifts