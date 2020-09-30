import React, { Component } from 'react'
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth'
import { Link } from 'react-router-dom'
export default class TopMenu extends Component {
    render() {
        return (
            <header>
                <nav>
                <div>
                    <ul>
                        <li><h1>collegetrackr.</h1></li>
                        <li><Link to="/schools/search">Search Colleges</Link></li>
                        <li><Link to="/tools/tuition">Tuition Calculator</Link></li>
                        <li><Link to="/tools/deadlines">Deadlines</Link></li>
                        <li><Link to="/info">Help</Link></li>
                    </ul>
                </div>
                <div>
                <ul className="right">
                    <IfFirebaseUnAuthed>
                        <li className="newButton"><Link to="/signIn">Sign In</Link></li>
                    </IfFirebaseUnAuthed>
                    <IfFirebaseAuthed>
                        <li className="newButton"><Link to="/account">Account</Link></li>
                    </IfFirebaseAuthed>
                </ul>
                </div>
                </nav>
          </header>
        )
    }
}