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
import Button from '../Components/Button'
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
              deadline,
              state,
              acceptsCommonApp,
              admissions_process,
              url
            }
          }
        }
      }`
    const { loading, error, data } = useQuery(COLLEGE_INFO)
    console.log(data)
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
                                    {data?.college.data.attributes.admissions_process}
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
                                    {/* <Map center={position} zoom={13} scrollWheelZoom={true}>
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker position={position}>
                                            <Popup>
                                                A pretty CSS3 popup. <br /> Easily customizable.
                                            </Popup>
                                        </Marker>
                                     </Map> */}
                                </InfoSection>
                                <InfoSection title="Tuition">
                                </InfoSection>
                                <InfoSection title="Similar schools">
                                     <span>Filter</span>
                                </InfoSection>
                            </div>
                            <aside className="collegeDetailCTA">
                            <Button width="fw" text="Sign in to track progress" type="disabled"/> 
                            <a href={data?.college.data.attributes.url}>Visit Website</a>
                                <h4>Application Information</h4>
                                <div className="">
                                    <p className="bold warning">Application Deadline: {data?.college.data.attributes.deadline}</p>
                                    {data?.college.data.attributes.acceptsCommonApp && <span>This college accepts the <a href="#">Common App.</a></span>}
                                </div>
                            </aside>
                        </div>
                    </div>
                )
}