import React, { useState} from 'react'
import Button from '../../Components/Button'
import AddToListStep1 from './AddToListStep1'
import AddToListStep2 from './AddToListStep2'

import { useParams } from 'react-router-dom'

function AddToListFlow({props}) {
    const [stage, setStage] = useState(0)
    const {initialStage, collegeId} = useParams()
    props !== undefined && setStage(initialStage)
    switch(stage) {
        case 0: 
            return <div className="centered"><AddToListStep1 collegeId={collegeId} collegeName={"University of Chicago"} collegeId={2}/> </div>
            break;
        case 1:
            return <div><AddToListStep2 /></div>
    }
}
export default AddToListFlow