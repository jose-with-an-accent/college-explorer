import React from 'react'
import { useParams } from 'react-router-dom'

const DeadlineItem = (props) => {
    const { item } = props;
    console.log("ITEM: ", item)
    return(
        <div className="deadlineItem">
            <span>{item.name}</span>
            <span>{item.appDueBy}</span>
        </div>
    )
}
export default DeadlineItem