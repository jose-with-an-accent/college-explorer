import { FirebaseDatabaseNode } from '@react-firebase/database'
import React, { Component } from 'react'
import TMDBApi from '../api/api'
import Filter from '../Components/Filter'
export default class SchoolSearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contentResults: {},
            searchTerm: ""
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
        let api = new TMDBApi()
        api.searchMovieWithTitle(this.state.searchTerm)

    }
    render() {
        return (
            <FirebaseDatabaseNode>
                <div className="schoolSearchPage">
                    <aside>
                        <h2>Search Colleges & Universities</h2>
                        <form onSubmit={this.searchForMovie}>
                            <div className="searchBar">
                                <input name="searchTerm" type="search" />
                                <input type="submit" value="Search" />
                                <div className="searchSuggest"></div>
                            </div>
                        </form>
                        <Filter filterType="Location" options={["CHICAGO, IL", "MINNEAPOLIS, MN"]} canUseCustom onFilterChange={this.handleFilterChange} />
                        <Filter filterType="Degrees" options={[]} canUseCustom onFilterChange={this.handleDegreeFilterChange} />
                    </aside>
                    <main id="searchResultsContainer">
                        {/* Search results go here! */}
                    </main>
                </div>
            </FirebaseDatabaseNode>
        )
    }
}