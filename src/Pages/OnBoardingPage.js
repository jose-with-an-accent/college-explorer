import React, { Component } from 'react'
import Calendar from 'react-calendar'

export default class OnBoardingPlace extends Component {
    render() {
        return (
            <div>
                <form>
                    <h2>Alright. Let's continue creating your user.</h2>
                    <input type="email" disabled value={""}/>
                    <input type="text" placeholder="first name" />
                    <input type="text" placeholder="last name" />
                    <input type="text" placeholder="ZIP code" />
                    <span>Spanish</span>
                    <Calendar />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}