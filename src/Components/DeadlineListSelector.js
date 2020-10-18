import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DeadlineItem from './DeadlineItem'
import propTypes from 'prop-types'
import DeadlineItemAdder from './DeadlineItemAdder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const DeadlineListSelector = (props) => {
    const { deadlines } = props
    const [deadlinesSelected, setDeadlinesSelected] = useState([])
    console.log("DL DEADLINES", JSON.stringify(deadlines))
    return (
        <div className="deadlineList">
            {
                deadlines?.map((val, ind) => {
                    return <span className="flex">{deadlinesSelected.indexOf(ind) != -1 && <FontAwesomeIcon icon={faCheck} />} <DeadlineItem item={val[0]} key={ind} onClick={() => {
                        const e = [...deadlinesSelected]
                        if (deadlinesSelected.indexOf(ind) == -1) {
                            e.push(ind)
                            setDeadlinesSelected(e)
                        } else {
                            //TODO - Add Remove function
                        }
                    }} /></span>
                })}
        </div>
    )
}
DeadlineListSelector.propTypes = {
    deadlines: propTypes.array.isRequired
}
export default DeadlineListSelector