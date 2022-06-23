import React from 'react'
import './card-shift.styles.scss'
import actions from '../../redux/actions/index'
import { useDispatch } from 'react-redux';
import Button from '../button/button.component';
import RatingStar from '../rating-star/rating-star.component';
import ShiftIcon from '../icons/shiftIcon.icons';


const CardShift = ({ shift , colorCard, available}) => {
    const dispatch = useDispatch()
    const { day, time, role,shiftIcon, pay, place, rating, adress, state } = shift
    return (
        <div className="card-shift-containers">
            <div className="card-shift-container">
                <div className={`card-shift-container-preview ${colorCard}`}>
                    <div className='shift-date'>
                        <h2>{day}</h2> <ShiftIcon shiftIcon={shiftIcon}/>
                    </div>
                    <div className='shift-time'>
                        <span>{time}</span>
                        <span>{role}</span>
                    </div>
                    <span className='pay'>${pay}/hr</span>
                </div>
                <div className="card-shift-container-info">
                    <div className='data'>
                        <h2>{place}</h2>
                        <RatingStar rating={rating} />
                        <span>{adress}</span>
                        <span>{state}</span>
                    </div>
                </div>
                <div className='buttons'>{
                    available ? <Button oneClick={()=>{dispatch(actions.addTakenShift(shift))}}>Apply</Button> :
                    <Button buttonType={'inverted'} oneClick={()=>{dispatch(actions.removeTakenShift(shift))}} >Decline</Button>
                }
                </div>
            </div>
        </div>
    )
}



export default CardShift
