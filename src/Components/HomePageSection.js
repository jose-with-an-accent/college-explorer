import React from 'react'

const HomePageSection = ({children, title}) => {
    return(
        <div className="homePageSection">
            <h3>{title}</h3>
            <div className='homePageBody'>
            {children}
            </div>
        </div>
    )
}
export default HomePageSection