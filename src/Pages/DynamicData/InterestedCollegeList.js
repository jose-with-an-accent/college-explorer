import React from 'react'
import { Link } from 'react-router-dom' 
import { FirebaseDatabaseNode } from '@react-firebase/database'
export default function InterestedCollegeList(props) {
    const { collegeChoices } = props
    let collegeElements = []


    if (collegeChoices != null) {
        const collegeArray = Object.values(collegeChoices)
            collegeArray.map((val, ind) => {
                const collegeProperties = Object.values(val)[0]
                collegeElements += <div>
                    <FirebaseDatabaseNode path={`all_colleges/${collegeProperties.collegeId}`}>
                        {collegeData => {
                            console.log(collegeData)
                            return (
                                <p>{JSON.stringify(collegeData)}</p>
                            )
                        }}

                    </FirebaseDatabaseNode>
                </div>
            })
                
                return collegeElements
        } else {
            return <p>pick some schools in the search page!</p>
        }
    }
    /* <ul className="collegeList">

                                    <li className="left"><span>{collegeData.value && collegeData.value.name}</span><div className="right"><span>Mark as Applied</span> |
                                    <span data-tip="View the college's page">{collegeData && <Link to={`/college/${val.collegeID}`}>View College</Link>}</span></div></li>
                                </ul>*/