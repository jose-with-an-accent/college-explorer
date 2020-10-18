import React, { useState } from 'react'
import convertObjectToArray from '../../api/convertObjectToArray'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import { FirebaseDatabaseNode, FirebaseDatabaseMutation } from '@react-firebase/database'
import DeadlineListSelector from '../../Components/DeadlineListSelector'
import PropTypes from 'prop-types'
import Button from '../../Components/Button'
export default function AddToListStep2(props) {
    const { collegeId } = props
    return (
        <React.Fragment>
            <h2>Great. Let's choose which deadline you're going to apply to.</h2>
            <FirebaseAuthConsumer>
                {({ isSignedIn, user }) => {
                    {user ? <FirebaseDatabaseNode path={`/all_colleges/${collegeId}/deadlines`}>
                        {data => {
                            if (data.value != null) {
                                return (
                                    <React.Fragment>
                                        <DeadlineListSelector deadlines={convertObjectToArray(data.value)} />
                                        <FirebaseDatabaseMutation path={`/userData/${user.uid}/deadlines`} type="push">
                                            {({ runMutation }) => {
                                                return <Button onClick={() => {
                                                    console.log("ASSASA")
                                                }} />
                                            }}
                                        </FirebaseDatabaseMutation>
                                    </React.Fragment>
                                    // <React.Fragment>
                                    //     <DeadlineListSelector deadlines={convertObjectToArray(data.value)} editable={false} />
                                    //     <FirebaseDatabaseMutation path=
                                    //     <Button text="Next" onClick={onNextButtonPress} />
                                    // </React.Fragment>)
                                )
                            }
                        }
                        }
                    </FirebaseDatabaseNode>
                } : null}
                }
            </FirebaseAuthConsumer>
        </React.Fragment>
    )
}

AddToListStep2.propTypes = {
    collegeId: PropTypes.number,
    collegeName: PropTypes.string,
    onNextButtonPress: PropTypes.func

}