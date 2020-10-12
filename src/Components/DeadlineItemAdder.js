import React, {useState} from 'react'
import Button from './Button'
function DeadlineItemAdder(props) {
    const { onChange } = props
    const [name, setName] = useState("")
    const [appDueBy, setAppDueBy] = useState(0)
    return(
        <div className="deadlineItem"><span> <input value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Add a deadline" data-/></span><span>Choose a time</span><span><Button text="Save" onClick={() => {onChange(name, appDueBy)}}/></span></div>
    )
}
export default DeadlineItemAdder