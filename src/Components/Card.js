import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const Card = ({children, size, title, linkAddress, className = ""}) => {
    return(
        <div className={`card card_${size} ${className}`}>
            <span className="headline"><Link to={linkAddress}>{title}</Link></span>
            {children}
        </div>
    )
}
export default Card