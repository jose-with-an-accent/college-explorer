import React from 'react'
import { useParams } from 'react-router-dom'

const DeadlineItem = (props) => {
    const { item, onClick, key } = props;
    console.log("ITEM: ", item)
    return(
        <div className="deadlineItem" onClick={onClick} key={key}>
            <span>{item.name}</span> 
            <span>{new Date(item.appDueBy).toDateString()}</span>
        </div>
    )
}
export default DeadlineItem