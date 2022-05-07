import React, { Component } from 'react'
export default class UserOverviewPage extends Component {
    constructor(props) {
        super(props)
        this.getGradeName = this.getGradeName.bind(this)
    }
    state = {
        gradeLevel: ""
    }
    signOut() {
        // firebase.auth().signOut()
    }
    getGradeName(gradeLevel) {
        switch (gradeLevel) {
            case 11: return "Junior"
            case 12: return "Senior"
            case 10: return "Sophomore"
            case 9: return "Freshman"
            default: return `${gradeLevel}th Grade`
        }
    }
    render() {
        return <h1>Overview</h1>
    }
}