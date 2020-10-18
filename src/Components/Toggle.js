import React from 'react'
import PropTypes from 'prop-types'

const Toggle = ({toggleMessage, onToggled, isToggled, name}) => {
    const options = isToggled ? "toggled toggleOption" : "toggleOption"
    return (
        <div id="options">
            <div className={options} name={name} onClick={onToggled}><span>{toggleMessage}</span></div>
        </div>
    )
}

Toggle.propTypes = {
    toggleMessage: PropTypes.string.isRequired,
    onToggled: PropTypes.func.isRequired,
    isToggled: PropTypes.bool.isRequired,
    name: PropTypes.string
}
export default Toggle