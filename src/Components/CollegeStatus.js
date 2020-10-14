import { FirebaseDatabaseMutation } from '@react-firebase/database';
import React, { Component, useState } from 'react'
import { Redirect } from 'react-router-dom';
import convertObjectToArray from '../api/convertObjectToArray';
import Button from './Button'
export default function CollegeStatus(props) {
    const { collegeChoices, userDatabase, currentCollegeID, uID } = props
    let isCollegeAdded = false /*I think this is problematic as isCollegeAdded does not update, but I really don't get how else.*/
    const [hasCollegeBeenSelected, setHasCollegeBeenSelected] = useState(false)
    const [isAddDeadlineClicked, setIsAddDeadlineClicked] = useState(false)
    console.log(`college Choices DB: ${JSON.stringify(collegeChoices)}, user: user, college ID: ${currentCollegeID}, user: ${uID}`)
    if (collegeChoices !== undefined || isAddDeadlineClicked) {
        const collegeArray = convertObjectToArray(collegeChoices)
        console.log(collegeArray)
        collegeArray.map((val) => {
            //search function
            if (val.info.collegeId == currentCollegeID) {
                isCollegeAdded = true
                console.log("true")
            }
        })
        if (isCollegeAdded || hasCollegeBeenSelected) {
            console.log('Already in list!');
            return (
                <div>
                    <Button text="Added to List | Set Up Deadlines" onClick={() => {
                        setIsAddDeadlineClicked(true)
                    }}  width="fw"></Button>
                    {isAddDeadlineClicked && <Redirect to={`/listFlow/1/${currentCollegeID}`} />}
                </div>
            )
        }
        else {
            console.log("Not in List!")
            return (<FirebaseDatabaseMutation type="set" path={`/user_data/${uID}/college_choices`}>
                {({ runMutation }) => {
                    return <Button text="Add to List" width="fw" onClick={
                        async () => {
                            const a = await runMutation({
                                info: {
                                    appStage: 0,
                                    collegeId: currentCollegeID
                                }
                            })
                            setHasCollegeBeenSelected(true)
                            console.log(a)
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
                        setHasCollegeBeenSelected(true)
                        isCollegeAdded = true
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