import React from 'react'
import propTypes from 'prop-types'
 function Button(props) {
    return(
        <button className={`btn btn_${props.width} ${props.type}`} onClick={props.onClick}>
            {props.text || props.child}
        </button>
    )
}
Button.propTypes = {
    width: propTypes.string,
    type: propTypes.string,
    onClick: propTypes.func,
    text: propTypes.string
}

export default Button