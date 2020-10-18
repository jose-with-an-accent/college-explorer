import { FirebaseAuthConsumer } from '@react-firebase/auth'
import { FirebaseDatabaseMutation, FirebaseDatabaseNode } from '@react-firebase/database'
import React, { Component } from 'react'
import DeadlineItemAdder from '../../Components/DeadlineItemAdder'
import DeadlineList from '../../Components/DeadlineList'
import convertObjectToArray from '../../api/convertObjectToArray'
import Button from '../../Components/Button'
import PropTypes from 'prop-types'
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
        let { onNextButtonPress, collegeId } = this.props
        return (
            <FirebaseAuthConsumer>
                {({ isSignedIn, user }) => {
                    return (<div>
                        <h1>Alright. Let's get started entering your information.</h1>
                        <p>Enter deadlines for the college you're choosing. This will help us remind you to complete needed work for the admissions process.</p>
                        <span>For <span className="bold">University of Chicago</span>, we already have these deadlines</span>:
                        <FirebaseDatabaseNode path={`/all_colleges/${collegeId}/deadlines`}>
                            {data => {
                                if (data.value != null) {
                                    return (
                                        <DeadlineList deadlines={convertObjectToArray(data.value)} editable={false} />)
                                } else {
                                    return null
                                }
                            }

                            }
                        </FirebaseDatabaseNode>
                        <p>Notice any missing? Add them here.</p>
                        <p>This info will also be used to improve on our current data, and across the site.</p>
                        {/* <DeadlineList deadlines={customDeadlines} /> */}
                        {user && <FirebaseDatabaseMutation type="push" path={`/all_colleges/${collegeId}/deadlines`}>
                            {({ runMutation }) => {
                                return (
                                    <React.Fragment>
                                        <DeadlineItemAdder onChange={(name, appDueBy) => {
                                            const newDeadlines = [...customDeadlines]
                                            newDeadlines.push({ name: name, appDueBy: appDueBy })
                                            this.setState({ customDeadlines: { [newDeadlines.length]: newDeadlines } })
                                            async function mutate() {
                                                const a = await runMutation(newDeadlines)
                                                console.log(a)
                                                return null
                                            }
                                            mutate()
                                        }} />
                                        <Button text="Next" onClick={onNextButtonPress} />
                                    </React.Fragment>
                                )
                            }}
                        </FirebaseDatabaseMutation>}
                    </div>)
                }}
            </FirebaseAuthConsumer>
        )
    }
}

AddToListStep1.propTypes = {
    collegeId: PropTypes.number,
    collegeName: PropTypes.string,
    onNextButtonPress: PropTypes.func

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