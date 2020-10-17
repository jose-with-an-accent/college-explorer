import React, { useState } from 'react'

function InfoSection(props) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    return(
        <div className={`card infoSection ${isCollapsed && 'isCollapsed'}`}>
            <header>
                <button style={{float: 'right'}} onClick={() => {
                    setIsCollapsed(!isCollapsed)
                }}>&#x2716;</button>
            </header>
            <h2>{props.title}</h2>
            {props.children}
            <div id="hideGradient"></div>
        </div>
    )
}
export default InfoSection