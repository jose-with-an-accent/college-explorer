import React from 'react'
 function Button(props) {
    return(
        <button className={`btn btn_${props.width} ${props.type}`}>
            {props.text}
        </button>
    )
}
export default Button