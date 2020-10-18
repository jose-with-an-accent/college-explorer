import { FirebaseDatabaseNode } from '@react-firebase/database'
import React from 'react'
import HomePageSection from '../Components/HomePageSection'

export default function SignedOutHomepage() {
    return (
        <div>
            <FirebaseDatabaseNode path={`/`}>
                {(data) => {
                    return (
                        <div>
                        <header className="h">
                            <h1>explore colleges, track your progress, and more.</h1>
                            {/* <span>{JSON.stringify(data.value)}</span> */}
                        </header>
                        <HomePageSection title="Explore by interest">

                        </HomePageSection>
                        <HomePageSection title="Top Colleges">
                            
                        </HomePageSection>
                        </div>
                        )
                }}
            </FirebaseDatabaseNode>
        </div>)
}