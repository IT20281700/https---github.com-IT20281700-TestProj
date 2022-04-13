import PlanCard from './maintenancePlanCard'
import React, { useState } from 'react'
import './planCard.css'
import './flipCard.css'
import PlanCardBack from './maintenancePlanCardBack'

export default function CardFliper({ details }) {
  //flip card
  const [flip, setFlip] = useState(true)

  function fliper() {
    setFlip(!flip)
  }

  let flipping = flip ? 'cardWrapper1' : 'cardWrapper2'

  //get Details

  return (
    <div onClick={fliper} className={flipping}>
      <div className="flip-card-front">
        <PlanCard details={details} />
      </div>
      <div className="flip-card-back">
        <PlanCardBack details={details} />
      </div>
    </div>
  )
}
