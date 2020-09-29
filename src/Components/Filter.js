import React, { Component } from 'react'
import Toggle from './Toggle'
import PropTypes from 'prop-types'
export default class Filter extends Component {
    render() {
        const { options, filterType } = this.props
        return (
            <div className={`filter`}>
                <span>Filter By {filterType}</span>
                {options.map((val) => {
                    return <div>
                        <Toggle toggleMessage={val} />
                    </div>
                })}
            </div>
        )
    }
}

Filter.propTypes = {
    options: PropTypes.array,
    filterType: PropTypes.string
}