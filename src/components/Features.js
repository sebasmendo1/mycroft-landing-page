import React from 'react'

function Features( {icon, header, description}) {
  return (
    <div className="feature">
        <img className="feature-icon" src={icon}></img>
        <h3>{header}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Features