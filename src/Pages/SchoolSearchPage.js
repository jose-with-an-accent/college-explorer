import { FirebaseDatabaseNode } from '@react-firebase/database'
import React, { Component } from 'react'
import TMDBApi from '../api/api'
import Filter from '../Components/Filter'

let isFeatureFunctioning = false

export default class SchoolSearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contentResults: {},
            searchTerm: "",
            selectedSchools: []
        }
        this.searchForSchool = this.searchForSchool.bind(this)
        this.handleFilterChange = this.handleFilterChange.bind(this);

    }
    handleFilterChange(e) {
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    searchForSchool(e) {
        e.preventDefault()
    }
    render() {
        return (
            <FirebaseDatabaseNode path="/">
                {data => {
                    return <div className="schoolSearchPage">
                        <aside>
                            <h2>Search Colleges & Universities</h2>
                            <form onSubmit={this.searchForSchool}>
                                <div className="searchBar">
                                    <input type="search" name="searchTerm" />
                                    <input type="submit" value="search" />
                                    <div className="searchSuggest"></div>
                                </div>
                            </form>
                            <Filter filterType="Location" options={["CHICAGO"]} canUseCustom onFilterChange={null} />
                            <Filter filterType="Areas of Interest" options={["Computer Science"]} canUseCustom onFilterChange={null} />
                        </aside>
                        <main id="searchResultsContainer">
                            {this.state.selectedSchools.map(val => {
                                return <h1>{JSON.stringify(val)}</h1>
                            })}
                        </main>
                    </div>
                }}
            </FirebaseDatabaseNode>
        )
    }
}