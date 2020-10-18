import { FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth'
import { FirebaseDatabaseNode } from '@react-firebase/database';
import React, { Component } from 'react'
import getSchoolStages from '../api/getSchoolStages'
import InterestedCollegeList from './DynamicData/InterestedCollegeList'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import { Redirect } from 'react-router-dom';
export default class UserOverviewPage extends Component {
    constructor(props) {
        super(props)
        this.getGradeName = this.getGradeName.bind(this)
    }
    state = {
        gradeLevel: ""
    }
    signOut() {
        firebase.auth().signOut()
    }
    getGradeName(gradeLevel) {
        switch (gradeLevel) {
            case 11: return "Junior"
            case 12: return "Senior"
            case 10: return "Sophomore"
            case 9: return "Freshman"
            default: return `${gradeLevel}th Grade`
        }
    }
    render() {
        let data = {}
        return (
            <FirebaseAuthConsumer>
                {({ isSignedIn, user, providerId }) => {
                    if (isSignedIn) {
                        return (
                            <FirebaseDatabaseNode path={`/user_data/${user.uid}`} orderByValue="created_on">
                                {data => {
                                    return (
                                        <React.Fragment>
                                            <header className="h short">
                                                <h2>{data.value && data.value["firstName"]}</h2>
                                                <h3>{data.value && this.getGradeName(data.value.gradeLevel)} at {data.value && data.value["schoolName"]}</h3>
                                                {/* <h2>{data.value.firstName}</h2> */}
                                            </header>
                                                {colleges => {
                                                    return <React.Fragment>
                                                        <main>
                                                            <section id="collegesList">
                                                                <h3>Colleges you're interested in</h3>
                                                                {JSON.stringify(data)}

                                                            </section>
                                                        </main>
                                                        <p>Copyright &copy; 2020 Jose Sanchez. Fork me on GitHub!</p>
                                                        <button onClick={this.signOut}>Sign Out</button>
                                                    </React.Fragment>
                                                }
                                                }
                                        </React.Fragment>)
                                }
                                }
                            </FirebaseDatabaseNode>
                        )
                    }
                }
                }
            </FirebaseAuthConsumer>
        )
    }
}