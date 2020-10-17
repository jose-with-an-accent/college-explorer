import { FirebaseAuthConsumer } from '@react-firebase/auth'
import { FirebaseDatabaseMutation, FirebaseDatabaseNode } from '@react-firebase/database'
import { app, database } from 'firebase'
import React, { Component, useState } from 'react'
import { useParams } from 'react-router-dom'
import DeadlineItemAdder from '../../Components/DeadlineItemAdder'
import DeadlineList from '../../Components/DeadlineList'
import convertObjectToArray from '../../api/convertObjectToArray'
import Button from '../../Components/Button'

export default class AddToListStep1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customDeadlines: [],
            deadlineArrayLength: 0
        }
    }
    render() {
        let { customDeadlines } = this.state
        let { onNextButtonPress, collegeName, collegeId } = this.props
        return (
            <FirebaseAuthConsumer>
                {({ isSignedIn, user }) => {
                    return (<div>
                        <h1>Alright. Let's get started entering your information.</h1>
                        <p>Enter deadlines for the college you're choosing. This will help us remind you to complete needed work for the admissions process.</p>
                        <span>For <span className="bold">University of Chicago</span></span>:
                        <h2>We already have these deadlines:</h2>
                        <FirebaseDatabaseNode path={`/all_colleges/${collegeId}/deadlines`}>
                            {data => {
                                if (data.value != null) {
                                    this.setState({ deadlineArrayLength: convertObjectToArray(data.value).length })
                                    return (
                                        <DeadlineList deadlines={convertObjectToArray(data.value)} editable={false} />)
                                } else {
                                    return null
                                }
                            }

                            }
                        </FirebaseDatabaseNode>
                        <h2>Notice any missing? Add them here.</h2>
                        <p>This info will also be used to improve on our current data, and across the site.</p>
                        <DeadlineList deadlines={customDeadlines} />
                        {user && <FirebaseDatabaseMutation type="set" path={`/all_colleges/${collegeId}/deadlines/${this.state.deadlineArrayLength}`}>
                            {({ runMutation }) => (
                                <React.Fragment>
                                    <DeadlineItemAdder onChange={(name, appDueBy) => {
                                        const arr = [...customDeadlines]
                                        arr.push({ name: name, appDueBy: appDueBy / 1000 }) // divide by 1000 to get into milliseconds, since that's what e Date requires
                                        const a = this.setState((state, props) => ({
                                            customDeadlines: arr
                                        }));
                                        const e = async () => {
                                            const a = await runMutation(arr) //MAJOR ISSUE: I FUCKED UP THE DATA TREE, SO SHOULD BE SOMETHING LIKE {[{0: {name: 0, appDueBy: 144323}}]}
                                            return null
                                        }
                                        e()
                                        // this.setState({customDeadlines: this.state.customDeadlines.push({name: name, appDueBy: appDueBy})})}
                                    }
                                    } />
                                    <Button text="Next" onClick={onNextButtonPress} />
                                </React.Fragment>)}

                        </FirebaseDatabaseMutation>}
                    </div>)
                }}
            </FirebaseAuthConsumer>
        )
    }
}



/* export default () => {
    const { collegeId } = useParams()
    const [customDeadlines, setCustomDeadlines] = useState([])
    const setDeadline = function(name, appDueBy) {
        console.log("Big Chungus", name, appDueBy)
        let prev = customDeadlines
        prev[prev.length + 1] = {name: name, appDueBy: appDueBy}
        setCustomDeadlines(prev)

    }
}
*/