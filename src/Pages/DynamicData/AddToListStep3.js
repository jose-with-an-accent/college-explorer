import React, { useState } from 'react'

import PropTypes from 'prop-types'
import Button from '../../Components/Button'
import { Redirect } from 'react-router-dom'
export default function AddToListStep3(props) {
    const [shouldRedirectHome, setShouldRedirectHome] = useState(false)
    return (
        <React.Fragment>
            {shouldRedirectHome && <Redirect to="/" />}
            <h1>Alright. We'll send you emails when your deadline is coming up.</h1>
            <p>Emails for letters of recommendation and personal recommendation are sent a month before. </p>
            <Button title="Return Home" onClick={() => {setShouldRedirectHome(true)}} />
            <ul>
                <li className="flex">
                    
                </li>
            </ul>
            </React.Fragment>
    )
}

AddToListStep3.propTypes = {
    collegeId: PropTypes.number,
    collegeName: PropTypes.string,
    onNextButtonPress: PropTypes.func

}