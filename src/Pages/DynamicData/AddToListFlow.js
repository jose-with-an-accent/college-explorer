import React, { useState } from 'react'
import Button from '../../Components/Button'
import AddToListStep1 from './AddToListStep1'
import AddToListStep2 from './AddToListStep2'

import { useParams } from 'react-router-dom'

function AddToListFlow({ props }) {
    const [stage, setStage] = useState(0)
    const { initialStage, collegeId } = useParams()
    props !== undefined && setStage(initialStage)
    return (
        <div className="centered">
            { stage == 0 ? <div className="dialog standalone"><AddToListStep1 collegeId={collegeId} collegeName={"University of Chicago"} collegeId={2} onNextButtonPress={() => { setStage(stage + 1) }} /> </div> : <div className="dialog standalone"><AddToListStep2 /></div>}
        </div>
    )
}
export default AddToListFlow