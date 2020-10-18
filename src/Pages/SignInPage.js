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
            appPassword: "",
            shouldRedirectToOnboarding: false,
        }
    }
    render() {
        return (
            <div>
                <IfFirebaseAuthed>
                    <Redirect to="/account" />
                </IfFirebaseAuthed>
                {this.state.shouldRedirectToOnboarding && <Redirect to="/onboarding" />}
                <form id="signInForm" onSubmit={this.signIn}>
                    <h2>sign in to continue</h2>
                    <input type="email" name="appEmail" onChange={this.recordInfo} />
                    <input type="password" name="appPassword" onChange={this.recordInfo} />
                    <input type="submit" value="Sign In" />
                    <button value="Register" onClick={this.signUp}>Register</button>
                    <button value="Forgot Password" onClick={this.forgotPassword} />
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
    async forgotPassword(e) {
        e.preventDefault()
        const {appEmail} = this.state
        try {
            const r = await firebase.auth().sendPasswordResetEmail(appEmail, {
                url: 'https://xyz/forgotPassword/?email=' //TODO- Change URL and add flow so forgot password works
            })
            console.log(r)
        } catch (e) {
            console.log(e)
        }
    }
    async signUp(e) {
        e.preventDefault()
        const { appEmail, appPassword } = this.state
        try {
            const r = await firebase.auth().createUserWithEmailAndPassword(appEmail, appPassword)
            this.setState({shouldRedirectToOnboarding: true})
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