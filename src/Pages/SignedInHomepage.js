import { FirebaseAuthConsumer } from '@react-firebase/auth'
import { FirebaseDatabaseNode } from '@react-firebase/database'
import React from 'react'
import HomePageSection from '../Components/HomePageSection'

export default function SignedInHomepage() {
    return (
        <FirebaseAuthConsumer>
            {({ isAuthed, user, providerId }) => {
                return (<div>
                    <FirebaseDatabaseNode path={`/user_data/${user.uid}`}>
                        {(data) => {
                            return (
                                <React.Fragment>
                                    <header style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80)' }} className="h">
                                        <h1>Hi {data.value?.firstName}</h1>
                                    </header>
                                    <HomePageSection title="Your Deadlines">
                                        {/* {<FirebaseDatabaseNode } */}
                                        <p>{JSON.stringify(data.value)}</p>
                                    </HomePageSection>
                                    <HomePageSection title="Colleges in your list"></HomePageSection>
                                </React.Fragment>
                            )
                        }}
                    </FirebaseDatabaseNode>
                </div>)
            }}
        </FirebaseAuthConsumer>
    )
}