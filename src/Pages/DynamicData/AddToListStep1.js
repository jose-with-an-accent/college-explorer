import { FirebaseDatabaseNode } from '@react-firebase/database'
import { app, database } from 'firebase'
import React, {Component, useState} from 'react'
import { useParams } from 'react-router-dom'
import DeadlineItemAdder from '../../Components/DeadlineItemAdder'
import DeadlineList from '../../Components/DeadlineList'


export default class AddToListStep1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customDeadlines: []
        }
    }
    render() {
        let {collegeId} = 2
        let {customDeadlines} = this.state
        return(
            <div className="dialog standalone">
            <h1>Alright. Let's get started entering your information.</h1>
            <p>Enter deadlines for the college you're choosing. This will help us remind you to complete needed work for the admissions process.</p>
            <span>For <span className="bold">University of Chicago</span></span>:
            <h2>We already have these deadlines:</h2>
            <FirebaseDatabaseNode path={`/all_colleges/${collegeId}/deadlines`}>
                {data => {
                    if (data.value != null) {
                        return (
                            <DeadlineList deadlines={data.value} editable={false} />)
                    } else {
                        return null
                    }
                }

                }
            </FirebaseDatabaseNode>
            <h2>Notice any missing? Add them here.</h2>
            <p>This info will also be used to improve on our current data, and across the site.</p>
            <DeadlineList deadlines={customDeadlines} />
            <DeadlineItemAdder onChange={(name, appDueBy) => {
                const arr = this.state.customDeadlines += {name: name, appDueBy: appDueBy}
                console.log(arr)
                const a = this.setState({customDeadlines: arr})
                // this.setState({customDeadlines: this.state.customDeadlines.push({name: name, appDueBy: appDueBy})})}
            }
                }/>
        </div>
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