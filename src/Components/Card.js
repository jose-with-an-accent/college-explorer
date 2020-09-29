import React, { Component } from 'react'

const Card = ({children, size, title}) => {
    return(
        <div className={`card card_${size}`}>
            <span className="headline">{title}</span>
        </div>
    )
}
export default Card