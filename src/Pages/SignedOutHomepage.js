import { FirebaseDatabaseNode } from '@react-firebase/database'
import React from 'react'
import HomePageSection from '../Components/HomePageSection'
import Card from '../Components/Card'
import { useQuery, gql } from '@apollo/client'
export default function SignedOutHomepage() {
    const GQL_QUERY = gql`query {
        spotlights {
            data {
              attributes {
                heading,
                description,
                colleges {
                    data {
                        attributes {
                            name
                        }
                    }
                }
              }
            }
        },
        colleges {
            data {
                id,
                attributes { 
                    name
                }
            }
        },
        interests {
            data {
                id, 
                attributes {
                    name
                }
        }
    }
    }`
    const { loading, error, data } = useQuery(GQL_QUERY)
    console.log(loading, data, error)
    return (
        <div>
            <header className="h">
                <h1>looking for colleges shouldn't be the hard part.</h1>
                <h2>we've got you covered. track applications, learn about the admissions process, search for colleges, and more in one platform</h2>
            </header>
            {data?.spotlights.data.map(val => (
                <HomePageSection className="blue" title={val.attributes.heading}>
                    <span>{val.attributes.description}</span>
                    {val.attributes.colleges.data.map(item => <Card size="xs" title={item.attributes.name}></Card>)}
                </HomePageSection>
            ))}
            <HomePageSection title="Explore by interest">
                {data?.interests.data.map(val => (
                    <Card size="xs" title={val.attributes.name}></Card>
                ))}
            </HomePageSection>
        </div>
    )
}