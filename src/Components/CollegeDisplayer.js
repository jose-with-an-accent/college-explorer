import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FirebaseDatabaseNode } from '@react-firebase/database'
import getSchoolStages from '../api/getSchoolStages'
import CarouselContainer from './CarouselContainer'
import Card from './Card'

export default class CollegeDisplayer extends Component {
    constructor(props) {
        super()

    }
    render() {
        return (
            <FirebaseDatabaseNode path={this.props.path}>
                {collegeData => {
                    return (
                        <section id="collegesList">
                            <CarouselContainer>
                                {collegeData.value?.map((val, ind) => {
                                    return <Card title={val.name} size="xs"/>
                                })}
                            </CarouselContainer>
                            {/*<ul className="collegeList">
                                <li><span>{collegeData.value && JSON.stringify(collegeData)}</span><div className="right"><span>{collegeData.value && getSchoolStages(collegeData.value.appStage)}</span> | <span>View College</span></div></li>
                    </ul> */}
                        </section>
                    )
                }}
            </FirebaseDatabaseNode>
        )
    }
}

CollegeDisplayer.propTypes = {
    path: PropTypes.string
}
class PersonalCollegeDisplayer extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <FirebaseDatabaseNode path={this.props.path}>
                {collegeData => {
                    return (
                        <section id="collegesList">
                            <ul className="collegeList">
                                <li><span>{collegeData.value && JSON.stringify(collegeData)}</span><div className="right"><span>{collegeData.value && getSchoolStages(collegeData.value.appStage)}</span> | <span>View College</span></div></li>
                            </ul>
                        </section>
                    )
                }}
            </FirebaseDatabaseNode>
        )
    }
}

PersonalCollegeDisplayer.propTypes = {
    path: PropTypes.string
}
export { PersonalCollegeDisplayer }