import { FirebaseDatabaseNode } from '@react-firebase/database'
import { database } from 'firebase'
import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import DeadlineItemAdder from '../../Components/DeadlineItemAdder'
import DeadlineList from '../../Components/DeadlineList'
import CustomDeadlineList from '../../Components/DeadlineList'

export default () => {
    const { collegeId } = useParams()
    const [customDeadlines, setCustomDeadlines] = useState([])
    const setDeadline = function(name, appDueBy) {
        setCustomDeadlines({name: name, appDueBy: appDueBy})
    }
    return (
        <div className="dialog standalone">
            <h1>Alright. Let's get started entering your information.</h1>
            <p>Enter deadlines for the college you're choosing. This will help us remind you to complete needed work for the admissions process.</p>
            <span>For <span className="bold">University of Chicago</span></span>:
            <h2>We already have these deadlines:</h2>
            <FirebaseDatabaseNode path={`/all_colleges/${collegeId}/deadlines`}>
                {data => {
                    console.log(data.value)
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
            <DeadlineList defaults={[]} editable={true} />
            <DeadlineItemAdder itemID={customDeadlines.length + 1} onChange={setCustomDeadlines}/>
        </div>
    )
}
