import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { FirebaseDatabaseNode } from '@react-firebase/database'
export default function CollegeDetailPage() {
    let { id } = useParams()
    return (
        <FirebaseDatabaseNode path="all_colleges/">
            <div>
                <header className="h short">
                    <h1>{id}</h1>
                </header>
            </div>
        </FirebaseDatabaseNode>
    )
}