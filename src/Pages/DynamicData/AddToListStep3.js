import React, { useState } from 'react'
import convertObjectToArray from '../../api/convertObjectToArray'
import { FirebaseDatabaseMutation, FirebaseDatabaseNode } from '@react-firebase/database'
import DeadlineListSelector from '../../Components/DeadlineListSelector'
import PropTypes from 'prop-types'
import Button from '../../Components/Button'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
export default function AddToListStep3(props) {
    const { collegeId, onNextButtonPress } = props
    return (
        <React.Fragment>
            <h1>Alrighty. Now, just select which items you need and their due dates.</h1>
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