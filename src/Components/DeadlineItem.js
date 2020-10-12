import React from 'react'
import { useParams } from 'react-router-dom'

const DeadlineItem = (props) => {
    const { item } = props;
    console.log(item)
    return(
        <div class="deadlineItem">
            <span>{item.name}</span>
            <span>{`${new Date(item.appDueBy * 1000)}`}</span>
        </div>
    )
}
export default DeadlineItem