import React, { Component } from 'react'

import firebase from "firebase/app"
import "firebase/auth"
import { Redirect } from 'react-router-dom'
import { IfFirebaseAuthed } from '@react-firebase/auth';

export default class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.recordInfo = this.recordInfo.bind(this)
        this.signIn = this.signIn.bind(this)
        this.signUp = this.signUp.bind(this)
        this.state = {
            appEmail: "",
            appPassword: ""
        }
    }
    render() {
        return (
            <div>
                <IfFirebaseAuthed>
                    <Redirect to="/account" />
                </IfFirebaseAuthed>
                <form id="signInForm" onSubmit={this.signIn}>
                    <h2>sign in to continue</h2>
                    <input type="email" name="appEmail" onChange={this.recordInfo} />
                    <input type="password" name="appPassword" onChange={this.recordInfo} />
                    <input type="submit" value="Sign In" />
                    <button value="Register" onClick={this.signUp}>Register</button>
                </form>
            </div>
        )
    }
    async signIn(e) {
        const { appEmail, appPassword } = this.state
        e.preventDefault()
        try {
            const r = await firebase.auth().signInWithEmailAndPassword(appEmail, appPassword)
            console.log(r);
        } catch (e) {
            console.log(e)
        }
    }
    async signUp(e) {
        e.preventDefault()
        const { appEmail, appPassword } = this.state
        try {
            const r = await firebase.auth().createUserWithEmailAndPassword(appEmail, appPassword)
            console.log(r)
        } catch (e) {
            console.log(e)
        }
    }
    recordInfo(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}