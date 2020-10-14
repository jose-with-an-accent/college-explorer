import React, { Component, useState } from 'react'
import CarouselContainer from '../Components/CarouselContainer'
import HomePageSection from '../Components/HomePageSection'
import Card from '../Components/Card'
import { FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth'
import { FirebaseDatabaseNode } from '@react-firebase/database'
import { Link } from 'react-router-dom'
import getSchoolStages from '../api/getSchoolStages'
import CollegeDisplayer, { PersonalCollegeDisplayer } from '../Components/CollegeDisplayer'
import SignedOutHomepage from './SignedOutHomepage'
import SignedInHomepage from './SignedInHomepage'
export default function HomePage() {

    const renderSchools = function (collegeData) {
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
    return (
        <FirebaseAuthConsumer>
            <IfFirebaseAuthed>
                <SignedInHomepage />
            </IfFirebaseAuthed>
            <IfFirebaseUnAuthed>
                <SignedOutHomepage />
            </IfFirebaseUnAuthed>

        </FirebaseAuthConsumer>
    )
}