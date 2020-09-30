import React from 'react'

function InfoSection(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}
export default InfoSection