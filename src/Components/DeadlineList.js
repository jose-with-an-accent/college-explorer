import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomDeadlineItem from './DeadlineItem'

const DeadlineList = (props) => {
    const { deadlines, setDeadlines } = useState([{ name: "Set Deadline Here", appDueBy: new Date() }])
    const { defaults } = props
    setDeadlines(defaults)
    return (
        <div class="deadlineList">
            
            {deadlines?.map((val, ind) => {
                return <CustomDeadlineItem item={val} key={ind} />
            })}
        </div>
    )
}
export default DeadlineList