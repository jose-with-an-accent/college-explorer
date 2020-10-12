import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DeadlineItem from './DeadlineItem'
import propTypes from 'prop-types'
import DeadlineItemAdder from './DeadlineItemAdder'

const DeadlineList = (props) => {
    const { deadlines } = props
    return (
        <div class="deadlineList">
            {
                deadlines?.map((val, ind) => {
                    return <DeadlineItem item={val} key={ind} />
                })}
        </div>
    )
}
DeadlineList.propTypes = {
    deadlines: propTypes.array.isRequired
}
export default DeadlineList