import React, { useState } from 'react'
import Button from '../../Components/Button'
import AddToListStep1 from './AddToListStep1'
import AddToListStep2 from './AddToListStep2'
import AddToListStep3 from './AddToListStep3'
import { useParams } from 'react-router-dom'

function AddToListFlow({ props }) {
    const [stage, setStage] = useState(0)
    const { initialStage, collegeId } = useParams()
    props !== undefined && setStage(initialStage)
    switch (stage) {
        case 0:
            return (<div className="centered"><div className="dialog standalone">
                <AddToListStep1 collegeId={collegeId} collegeName={"University of Chicago"} collegeId={2} onNextButtonPress={() => { setStage(stage + 1) }} />
            </div></div>)
        case 1:
            return <div className="centered"><div className="dialog standalone">
                <AddToListStep2 onNextButtonPress={() => { setStage(stage + 1) }} collegeId={2} /></div></div>
        case 2:
        default:
            return null
    }
}
export default AddToListFlow