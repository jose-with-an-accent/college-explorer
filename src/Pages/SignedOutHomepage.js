import { FirebaseDatabaseNode } from '@react-firebase/database'
import React from 'react'
import HomePageSection from '../Components/HomePageSection'
import Card from '../Components/Card'
import { useQuery, gql } from '@apollo/client'
export default function SignedOutHomepage() {
    const COLLEGE_INFO = gql`query {
        colleges {
        data {
            id,
            attributes { 
                name
            }
        }
    }
    }`
    const { loading, error, data } = useQuery(COLLEGE_INFO)
    return (
        <div>
            <header className="h">
                <h1>explore colleges, track your progress, and more.</h1>
            </header>

            <HomePageSection title="Explore by interest">
                <Card size="xs" title="Computer Science"></Card>
                <Card size="xs" title="Art"></Card>
            </HomePageSection>
            <HomePageSection title="Top Colleges">
                {data?.colleges.data.map(val => (
                    <Card size="xs" title={val.attributes.name} linkAddress={`/college/${val.id}`}/>
                 ))}

            </HomePageSection>
        </div>
    )
}