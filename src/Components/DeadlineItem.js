import React from 'react'
import { useParams } from 'react-router-dom'

const CustomDeadlineItem = () => {
    const {item} = useParams()
    return(
        <div class="deadlineItem">
            <span>{item.name}</span>
            <span>{new Date(item.appDueBy)}</span>
        </div>
    )
}
export default CustomDeadlineItem