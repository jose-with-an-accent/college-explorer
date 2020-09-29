import React, { Component } from 'react'

export default class OnBoardingPlace extends Component {
    render() {
        return (
            <div>
                <form>
                    <h2>Alright. Let's continue creating your user.</h2>
                    <input type="email" disabled/>
                    <input type="text" placeholder="first name" />
                    <input type="text" placeholder="ZIP code" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}