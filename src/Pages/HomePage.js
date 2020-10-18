import React from 'react'

import { FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth'
import SignedOutHomepage from './SignedOutHomepage'
import SignedInHomepage from './SignedInHomepage'
export default function HomePage() {
    
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