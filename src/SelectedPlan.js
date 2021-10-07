import React from 'react'
import { MusicIcon } from './Images/cardImages'

const SelectedPlan = () => {
  return (
    <div className="selected-plan">
      <span className="plan-details">
        <MusicIcon className="music-icon" />
        <span className="plan-text">
          <b className="plan-text-primary">Annual Plan</b>
          <span className="plan-text-secondary">$59.99/year</span>
        </span>

      </span>
      <a className="card-link" href="#">Change</a>
    </div>
  )
}

export default SelectedPlan
