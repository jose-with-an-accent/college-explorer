import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FirebaseDatabaseNode } from '@react-firebase/database'
import InfoSection from '../Components/InfoSection'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import CollegeStatus from '../Components/CollegeStatus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import convertObjectToArray from '../api/convertObjectToArray'
import { useQuery, gql } from '@apollo/client'
import { Map, TileLayer, Popup, Marker} from 'react-leaflet'
const position = [51.505, -0.09]
export default function CollegeDetailPage() {
    let { id } = useParams()
    const [setIsCollegeSelected] = useState(false)

    const COLLEGE_INFO = gql`query { 
        college(id:${id}) {
          data {
            attributes {
              name,
              description,
              city,
              state
            }
          }
        }
      }`
    const { loading, error, data } = useQuery(COLLEGE_INFO)
    console.log(data)
    return (
        <FirebaseAuthConsumer>
            {({ isSignedIn, user }) => {
                return (
                    <div className="collegeDetailPage">
                        <div id="headerImageBg"></div>
                        <header className="h">
                            <h1>{data?.college.data.attributes.name}</h1>
                            <span className="flex"><FontAwesomeIcon icon={faLocationArrow} /> {data?.college.data.attributes.city}, {data?.college.data.attributes.state}</span>
                        </header>
                        <div className="flex flex-row">
                            <div className="collegeDetailMain">
                                <InfoSection title="Overview">
                                    {data?.college.data.attributes.description}
                                </InfoSection>
                                <InfoSection title="Admissions">
                                    {/* {collegeInfo?.admissionsAverages != null ? <ul>
                                                                    <li>The middle 50% SAT Range is {collegeInfo.admissionsAverages.sat.minAvgRange} - {collegeInfo.admissionsAverages.sat.maxAvgRange} </li>
                                                                    <li>The middle 50% ACT Range is {collegeInfo.admissionsAverages.act.minAvgRange} - {collegeInfo.admissionsAverages.act.maxAvgRange} </li>
                                                                </ul> : <span>No Admissions Averages found :(</span>} */}
                                </InfoSection>
                                <InfoSection title="Programs Offered">
                                    <ul>
                                        {/* {collegeInfo.programs?.map((val, ind) => {
                                                                        return (<li>{val.name}</li>)
                                                                    })} */}
                                    </ul>
                                </InfoSection>
                                {/* {collegeInfo.extracurriculars && <InfoSection title="Extracurriculars">

                                                            </InfoSection>} */}
                                <InfoSection title="Location">
                                    <Map center={position} zoom={13} scrollWheelZoom={true}>
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker position={position}>
                                            <Popup>
                                                A pretty CSS3 popup. <br /> Easily customizable.
                                            </Popup>
                                        </Marker>
                                    </Map>
                                </InfoSection>
                                {/* {collegeInfo.tuition && <InfoSection title="Tuition"> */}

                                {/* </InfoSection>} */}
                                {/* <InfoSection title="More Info">
                                                                {collegeInfo.nicknames && <React.Fragment>
                                                                    <p>Other Nicknames</p>
                                                                    <ul>{collegeInfo.nicknames.map((val, ind) => {
                                                                    return <li>{val}</li>
                                                                })}</ul></React.Fragment>}
                                                                <p>For more info, consult <a target="_blank" rel="noopener noreferrer" href={collegeInfo.siteAddress}>this school's website</a></p>
                                                            </InfoSection> */}

                            </div>
                            <aside className="collegeDetailCTA">
                                <h4>Application Information</h4>
                                <div className="warning">
                                    <span className="bold">Application Deadlines:</span>
                                    <ul>

                                        {/* {collegeInfo.deadlines ? convertObjectToArray(collegeInfo.deadlines).map((val, ind) => {
                                                                        return <li className="">{val[0].name}: {new Date(val[0].appDueBy).toDateString()}</li>
                                                                    }) : <li>No App Deadlines found.</li>} */}
                                    </ul>
                                </div>
                                {/* {
                                                                <React.Fragment>
                                                                    <CollegeStatus userDatabase={userDatabase.value} onCollegeSelected={() => { setIsCollegeSelected(true) }} collegeChoices={collegeChoices.college_choices} currentCollegeID={id} uID={user.uid} />
                                                                    <p>Note: reload the page for this to take effect.</p>
                                                                    </React.Fragment>
                                                            } */}
                                {/* this._renderSidebar
                                                                // userDatabase && collegeChoices && collegeChoices.college_choices.includes(collegeInfo.id) ? <Button text="Added To List" width="fw" /> : <FirebaseDatabaseMutation type="push" path={`/user_data/${user.uid}/college_choices`}>
                                                                //     {({ runMutation }) => {
                                                                //         return <Button text="Add To List" width="fw" onClick={
                                                                //             async () => {
                                                                //                 const index = collegeChoices.college_choices.length + 1;
                                                                //                 console.log("ClIcked!")
                                                                //                 const a = await runMutation({data: {
                                                                //                     appStage: 0,
                                                                //                     collegeId: 3
                                                                //                 }})

                                                                //                 console.log(a)
                                                                //             }
                                                                //         }>Add To List</Button>
                                                                //     }}
                                                                // </FirebaseDatabaseMutation>
                                                                <Button text="Working on it!" width="fw" type="secondary" />*/}
                            </aside>
                        </div>
                    </div>
                )

            }}
        </FirebaseAuthConsumer>
    )
}