import React, { Component } from 'react'
import Toggle from '../Components/Toggle'
import { Link } from 'react-router-dom'

export default class NewListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: "New Watchlist",
            nameEditableToggled: false,
            anyoneSuggestsToggle: false,
            listLink: "",


        }
        this.toggleListName = this.toggleListName.bind(this)
        this.toggleAnyoneSuggests = this.toggleAnyoneSuggests.bind(this)
        this.recordData = this.recordData.bind(this)
    }
    recordData(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    toggleAnyoneSuggests(e) {
        this.setState({
            anyoneSuggestsToggle: !this.state.anyoneSuggestsToggle
        })
    }
    toggleListName(e) {
        this.setState({
            nameEditableToggled: !this.state.nameEditableToggled
        })
        e.target.focus()
    }
    render() {
        const { nameEditableToggled } = this.state
        return (
            <div>
                <header className="h short">
                    {!nameEditableToggled ? <h2 onClick={this.toggleListName}>{this.state.listName}</h2> : <input type="text" name="listName" onChange={this.recordData} onClick={this.toggleListName} value={this.state.listName} className="listNameBox" />}
                </header>
                <main>
                    <Toggle onToggled={this.toggleAnyoneSuggests} toggleMessage="Anyone can suggest content" isToggled={this.state.anyoneSuggestsToggle} />
                    <div className="addContent">
                        <Link to="/new/add_movie"><div><h3>Add Movies</h3></div></Link>
                        <div><h2>Add TV</h2></div>
                    </div>
                </main>
            </div>
        )
    }
}