import React from 'react'
import './rating-star.styles.scss'

const RatingStar = ({rating}) => {
  return (
    <div className="star-ratings-css" title={rating}></div>
  )
}

export default RatingStar