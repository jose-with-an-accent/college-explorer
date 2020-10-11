import { FirebaseDatabaseNode } from '@react-firebase/database'
import React from 'react'
import { useParams } from 'react-router-dom'
import DeadlineList from '../../Components/DeadlineList'
import CustomDeadlineList from '../../Components/DeadlineList'

export default () => {
    const { collegeId } = useParams()
    return (
        <div className="dialog standalone">
            <h1>Alright. Let's get started entering your information.</h1>
            <p>Enter deadlines for the college you're choosing. This will help us remind you to complete needed work for the admissions process.</p>
            <span>For <span className="bold">University of Chicago</span></span>:
            <h2>We already have these deadlines:</h2>
            <FirebaseDatabaseNode path={`/all_colleges/${collegeId}/deadlines`}>
                {data => {
                    return (
                        <DeadlineList defaults={data.value} editable={false} />)
                }}
            </FirebaseDatabaseNode>
            <h2>Notice any missing? Add them here.</h2>
            <p>This info will also be used to improve on our current data, and across the site.</p>
            <DeadlineList defaults={[]} editable={true} />
        </div>
    )
}
