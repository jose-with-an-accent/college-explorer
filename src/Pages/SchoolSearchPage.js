import React, { Component } from 'react'
import Filter from '../Components/Filter'
import Card from '../Components/Card'
import { MapContainer, TileLayer } from 'react-leaflet'

export default function SchoolSearchPage() {
    return (
        <div className="schoolSearchPage">
            <MapContainer style={{display: 'absolute', top: '100px', left: '100px'}} center={[51.505, -0.09]}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        <aside>
            <h2>Search Colleges & Universities</h2>
            <form>
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
        </main>
    </div>
    )
}