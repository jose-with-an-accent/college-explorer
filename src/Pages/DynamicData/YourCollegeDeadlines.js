import React from 'react'
import { Link } from 'react-router-dom'
import { FirebaseDatabaseNode } from '@react-firebase/database'
import propTypes from 'prop-types'
import convertObjectToArray from '../../api/convertObjectToArray'
export default function InterestedCollegeList(props) {
    const { collegeChoices, allCollegesArray } = props
    let collegeElements = []


    if (collegeChoices != null) {
        console.log(collegeChoices)
        const collegeArray = convertObjectToArray(collegeChoices)
        collegeArray.map(val => {
            const collegeProperties = convertObjectToArray(val)[0]
            console.log(collegeArray)
            collegeElements += <div><h1>{JSON.stringify(val)}</h1></div>
        })

        return collegeElements
    } else {
        return <p>pick some schools in the search page!</p>
    }
}
InterestedCollegeList.propTypes = {
    collegeChoices: propTypes.object,
    allCollegesList: propTypes.array
}

/* <ul className="collegeList">

                                <li className="left"><span>{collegeData.value && collegeData.value.name}</span><div className="right"><span>Mark as Applied</span> |
                                <span data-tip="View the college's page">{collegeData && <Link to={`/college/${val.collegeID}`}>View College</Link>}</span></div></li>
                            </ul>*/