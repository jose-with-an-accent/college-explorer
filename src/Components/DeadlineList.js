import React  from 'react'
import DeadlineItem from './DeadlineItem'
import propTypes from 'prop-types'

const DeadlineList = (props) => {
    const { deadlines } = props
    console.log("DL DEADLINES", JSON.stringify(deadlines))
    return (
        <div className="deadlineList">
            {
                deadlines?.map((val, ind) => {
                    return <DeadlineItem item={val[0]} key={ind} />
                })}
        </div>
    )
}
DeadlineList.propTypes = {
    deadlines: propTypes.array.isRequired
}
export default DeadlineList