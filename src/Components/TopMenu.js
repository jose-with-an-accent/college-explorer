import React from 'react'
import appConfig from '../api/appConfig.json'
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth'
import { Link } from 'react-router-dom'
export default function TopMenu() {
    return (
        <header>
            <nav>
                <div>
                    <ul>
                        <li><h1><Link to="/">collegiate.</Link></h1></li>
                        <li><Link to="/schools/search">Search Colleges</Link></li>
                        { appConfig.advancedFeaturesUnlocked && <React.Fragment><li><Link to="/tools/tuition">Tuition Calculator</Link></li>
                        <li><Link to="/tools/deadlines">Deadlines</Link></li>
                        <li><Link to="/info">Help</Link></li></React.Fragment>}
                    </ul>
                </div>
                <div>
                    <ul className="right">
                        <IfFirebaseUnAuthed>
                            <li className="accountButton"><Link to="/signIn">Sign In</Link></li>
                        </IfFirebaseUnAuthed>
                        <IfFirebaseAuthed>
                            <li className="accountButton">
                                {/* <div ref={setPopperElement} style={styles.popper} {...attributes.popper}><h1>AAAAA</h1></div> */}
                                <Link to="/account">Account</Link>
                            </li>
                        </IfFirebaseAuthed>
                    </ul>
                </div>
            </nav>
        </header>
    )
}