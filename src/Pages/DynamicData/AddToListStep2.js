import React, { Component } from 'react'
import convertObjectToArray from '../../api/convertObjectToArray'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import { FirebaseDatabaseNode, FirebaseDatabaseMutation } from '@react-firebase/database'
import DeadlineListSelector from '../../Components/DeadlineListSelector'
import PropTypes from 'prop-types'
import Button from '../../Components/Button'
export default class AddToListStep2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDeadlines: []
        }
        this.onDeadlineChange = this.onDeadlineChange.bind(this)
    }
    onDeadlineChange(deadline) {
        this.setState({
            selectedDeadlines: deadline
        })
    }
    render() {
        let { onNextButtonPress } = this.props
        let collegeId = 2
        return (
            <React.Fragment>
                <h2>Great. Let's choose which deadline you're going to apply to. These will be added to your own profile.</h2>
                <FirebaseAuthConsumer>
                    {({ isSignedIn, user }) => {
                        return <React.Fragment>
                            {user && <FirebaseDatabaseNode path={`/all_colleges/${collegeId}/deadlines`}>
                                {
                                    data => {
                                        if (data.value != null) {
                                            return <React.Fragment>
                                                <DeadlineListSelector deadlines={convertObjectToArray(data.value)} value={this.state.selectedDeadlines} onDeadlineChange={(deadline) => { this.onDeadlineChange(deadline) }} />
                                                <FirebaseDatabaseMutation path={`/user_data/${user.uid}/college_choices/${collegeId}/deadlines`} type="push">
                                                    {
                                                        ({ runMutation }) => {

                                                            return <Button text="Next" onClick={
                                                                async () => {
                                                                    let newArray = []
                                                                    let e = convertObjectToArray(data.value)
                                                                    this.state.selectedDeadlines.map((val) => {
                                                                        // newArray.push(e[val])
                                                                        let currentItem = e[val]
                                                                        newArray.push(currentItem)
                                                                        console.log("MUTATION", JSON.stringify(newArray))
                                                                        return null
                                                                    })
                                                                    const {key} = await runMutation(newArray)
                                                                    console.log(key, newArray)
                                                                    onNextButtonPress()
                                                                }
                                                            } />
                                                        }
                                                    }
                                                </FirebaseDatabaseMutation>
                                            </React.Fragment>
                                        } else {
                                            return <p>Return to the previous page to set deadlines</p>
                                        }
                                    }
                                }
                            </FirebaseDatabaseNode>}
                        </React.Fragment>
                    }
                    }
                </FirebaseAuthConsumer>
            </React.Fragment>
        )
    }
}

AddToListStep2.propTypes = {
    collegeId: PropTypes.number,
    collegeName: PropTypes.string,
    onNextButtonPress: PropTypes.func

}