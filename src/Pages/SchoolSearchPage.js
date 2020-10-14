import { FirebaseDatabaseNode } from '@react-firebase/database'
import React, { Component } from 'react'
import TMDBApi from '../api/api'
import Filter from '../Components/Filter'
export default class SchoolSearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contentResults: {},
            searchTerm: "",
            selectedSchools: {}
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
    }
    render() {
        return (
            <FirebaseDatabaseNode path="/">
                {({data}) => {
                    data && this.setState({selectedSchools: data.value.all_colleges})
                    return <div className="schoolSearchPage"> 
                        <aside>
                            <h2>Search Colleges & Universities</h2>
                            <form onScroll={this.searchForSchool}>
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
                        {JSON.stringify(this.state.selectedSchools)}
                        </main>
                    </div>
                }}
            </FirebaseDatabaseNode>
        )
    }
}