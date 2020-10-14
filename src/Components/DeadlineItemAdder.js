import React, { useState } from 'react'
import Button from './Button'
import { usePopper } from 'react-popper';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
function DeadlineItemAdder(props) {
    const { onChange } = props
    const [name, setName] = useState("")
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [appDueBy, setAppDueBy] = useState(0)
    const [dateSelected, setdateSelected] = useState(null)
        //here's the popper configurations
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'right',
        strategy: "fixed",
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });
    return (
        <React.Fragment>
            <div className="deadlineItem"><span> <input value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Add a deadline" data- /></span><span ref={setReferenceElement}><Button text="Set Due Date" onClick={() => {setIsCalendarOpen(!isCalendarOpen)}}/></span><span><Button text="Save" onClick={() => { onChange(name, appDueBy) }} /></span></div>
            <div className={isCalendarOpen ? "" : "hidden"} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                <Calendar onChange={(d) => {
                    setAppDueBy(d.valueOf())
                }}/>
                <div ref={setArrowElement} style={styles.arrow} />
            </div>
        </React.Fragment>
    )
}
export default DeadlineItemAdder