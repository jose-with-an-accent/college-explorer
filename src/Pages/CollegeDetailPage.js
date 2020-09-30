import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../Components/Button'
import { FirebaseDatabaseMutation, FirebaseDatabaseNode } from '@react-firebase/database'
import InfoSection from '../Components/InfoSection'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
export default function CollegeDetailPage() {
    let { id } = useParams()
    return (
        <FirebaseAuthConsumer>
            {({ isSignedIn, user }) => {
                console.log(user)
                return (
                    user && <FirebaseDatabaseNode path={`user_data/${user.uid}`}>
                        {userDatabase => {
                            return <FirebaseDatabaseNode path={`all_colleges/${id}`}>
                                {collegeInfo => {
                                    console.log(collegeInfo);
                                    if (collegeInfo.value != null) {
                                        return (
                                            <div className="collegeDetailPage">
                                                <div id="headerImageBg" style={{ backgroundImage: `url: ${collegeInfo.value.bgImage}` }}></div>
                                                <header className="h">
                                                    <h1>{collegeInfo.value.name}</h1>
                                                </header>
                                                <div className="flex flex-row">
                                                    <div className="collegeDetailMain">
                                                        <InfoSection title="Overview">
                                                            {collegeInfo.value.description}
                                                        </InfoSection>
                                                        <InfoSection title="Admissions">
                                                            {collegeInfo.value.admissionsAverages != null ? <ul>
                                                                <li>The middle 50% SAT Range is {collegeInfo.value.admissionsAverages.sat.minAvgRange} - {collegeInfo.value.admissionsAverages.sat.maxAvgRange} </li>
                                                                <li>The middle 50% ACT Range is {collegeInfo.value.admissionsAverages.act.minAvgRange} - {collegeInfo.value.admissionsAverages.act.maxAvgRange} </li>
                                                            </ul> : <h2>No Admissions Averages found :(</h2>}
                                                        </InfoSection>
                                                        <InfoSection title="Programs Offered">

                                                        </InfoSection>
                                                        <InfoSection title="Extracurriculars">

                                                        </InfoSection>

                                                    </div>
                                                    <aside className="collegeDetailCTA">
                                                        <h4>Application Information</h4>
                                                        <div className="warning">
                                                            <span className="bold">Application Deadlines:</span>
                                                            <ul>

                                                                {collegeInfo.value.deadlines ? collegeInfo.value.deadlines.map((val, ind) => {
                                                                    console.log(val.cappDueBy)
                                                                    return <li className="">{val.name}: {new Date(val.appDueBy).toDateString()}</li>
                                                                }) : <li>No App Deadlines found.</li>}
                                                            </ul>
                                                        </div>
                                                        {
                                                        {
                                                            collegeChoices = userDatabase.value.user_data[user.uid].college_choices
                                                        userDatabase.value && collegeChoices.includes(collegeInfo.id) ? <Button text="Added To List" width="fw" /> : <FirebaseDatabaseMutation type="push" path={`/user_data/${user.uid}/college_choices`}>
                                                            {({runMutation}) => {
                                                            return <Button text="Add To List" width="fw" onClick={
                                                                async() => {
                                                                    const a = await runMutation({})
                                                                    console.log(a)
                                                                }
                                                            }>Add To List</Button>
                                                            }}
                                                            </FirebaseDatabaseMutation>}}
                                                        <Button text="Working on it!" width="fw" type="secondary" />
                                                    </aside>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }
                                }
                                }
                            </FirebaseDatabaseNode>
                        }}
                    </FirebaseDatabaseNode>)
            }}
        </FirebaseAuthConsumer>
    )
}