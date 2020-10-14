import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DeadlineItem from './DeadlineItem'
import propTypes from 'prop-types'
import DeadlineItemAdder from './DeadlineItemAdder'

const DeadlineList = (props) => {
    const { deadlines } = props
    console.log("DL DEADLINES", JSON.stringify(deadlines))
    return (
        <div className="deadlineList">
            {
                deadlines?.map((val, ind) => {
                    return <DeadlineItem item={val} key={ind} />
                    return null
                })}
        </div>
    )
}
DeadlineList.propTypes = {
    deadlines: propTypes.array.isRequired
}
export default DeadlineList