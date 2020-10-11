import { FirebaseDatabaseMutation } from '@react-firebase/database';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Button from './Button'
export default function CollegeStatus(props) {
    const { collegeChoices, userDatabase, currentCollegeID, uID } = props
    let isCollegeAdded = false
    console.log(`college Choices DB: ${JSON.stringify(collegeChoices)}, user: user, college ID: ${currentCollegeID}, user: ${uID}`)
    if (collegeChoices !== undefined) {
        const collegeArray = Object.values(collegeChoices)
        console.log(collegeArray)
        collegeArray.map((val) => {
            //search function
            if (val.info.collegeId == currentCollegeID) {
                isCollegeAdded = true
                console.log("true")
            }
        })
        if (isCollegeAdded) {
            console.log('Already in list!');
            return (
                <div>
                    <Button text="Added to List | Remove" width="fw"></Button>
                    <Redirect to={`/listFlow/1/${currentCollegeID}`} />
                </div>
            )
        }
        else {
            console.log("Not in List!")
            return (<FirebaseDatabaseMutation type="push" path={`/user_data/${uID}/college_choices`}>
                {({ runMutation }) => {
                    return <Button text="Add to List" width="fw" onClick={
                        async () => {
                            const a = await runMutation({
                                info: {
                                    appStage: 0,
                                    collegeId: currentCollegeID
                                }
                            
                            })

                        }
                    } />
                }}
            </FirebaseDatabaseMutation>)
        }

    } else {
        console.log("No colleges at all!")
        return (<FirebaseDatabaseMutation type="push" path={`/user_data/${uID}/college_choices`}>
            {({ runMutation }) => {
                return <Button text="Add to List" width="fw" onClick={
                    async () => {
                        const a = await runMutation({
                            info: {
                                appStage: 0,
                                collegeId: currentCollegeID
                            }
                        })
                        console.log(a)

                    }
                } />
            }}
        </FirebaseDatabaseMutation>)

    }
    return (
        <p>Log in to keep tracking</p>
    );
}