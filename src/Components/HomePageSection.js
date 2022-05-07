import React from 'react'

const HomePageSection = ({children, title, className}) => {
    return(
        <div className={`homePageSection ${className}`}>
            <h3>{title}</h3>
            <div className='homePageBody'>
            {children}
            </div>
        </div>
    )
}
export default HomePageSection