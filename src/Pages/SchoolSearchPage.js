import { FirebaseDatabaseNode } from '@react-firebase/database'
import React, { Component } from 'react'
import Filter from '../Components/Filter'
import Card from '../Components/Card'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SchoolSearchPage extends Component {
    constructor(props) {
        super()
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
                            {/* {this.state.selectedSchools.map(val => {  Will be used once filtering works. */}
                            {
                                data.value?.all_colleges.map((val, ind) => {
                                    return <Card className="search" size="m" title={val.name} linkAddress={`/college/${ind}`}>
                                        <span><FontAwesomeIcon icon={faLocationArrow} />: {val.location?.friendlyCityName}, {val.location?.friendlyStateAbbrev}, {val.location?.friendlyCountryName}</span>
                                        <span>{val.description}</span>
                                    </Card>
                                })
                                //     return <h1>{JSON.stringify(val)}</h1>
                                // })}
                            }
                        </main>
                    </div>
                }}
            </FirebaseDatabaseNode>
        )
    }
}