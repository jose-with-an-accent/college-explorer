import React, { Component } from 'react'
import CarouselContainer from '../Components/CarouselContainer'
import HomePageSection from '../Components/HomePageSection'
import Card from '../Components/Card'
import { FirebaseAuthConsumer, IfFirebaseAuthed } from '@react-firebase/auth'
import { FirebaseDatabaseNode } from '@react-firebase/database'
import { Link } from 'react-router-dom'
import getSchoolStages from '../api/getSchoolStages'
import CollegeDisplayer, { PersonalCollegeDisplayer } from '../Components/CollegeDisplayer'
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.renderSchools = this.renderSchools.bind(this)
    }
    renderSchools(collegeData) {
        let itemsToRender = []

        console.log(collegeData)

        if (collegeData.value != null) {
            collegeData.value.forEach(e => {
                itemsToRender += <h1>{JSON.stringify(e)}</h1>
            })
        } else {
        }
        console.log(JSON.stringify(itemsToRender))
        return itemsToRender;
    }
    render() {
        return (
            <div>
                <header className="h short">
                    <h2>college tracking and search, simplified.</h2>
                </header>
                <main>
                    <FirebaseAuthConsumer>
                        {({ isSignedIn, user, providerID }) => {
                            return (
                                user && <HomePageSection title="Schools on Your List">
                                    <div>
                                        <PersonalCollegeDisplayer path={`user_data/${user.uid}/college_choices`} />
                                    </div>
                                </HomePageSection>
                            )
                        }
                        }

                    </FirebaseAuthConsumer>
                    <HomePageSection title="Top Colleges">
                        <CollegeDisplayer path="all_colleges/" />
                    </HomePageSection>
                </main>
            </div>
        )
    }
}