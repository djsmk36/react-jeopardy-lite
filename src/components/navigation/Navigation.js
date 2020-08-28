import {Link} from "react-router-dom"
import React from "react"

function Navigation(props) {
    return (
        <div className="Navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/clock">Clock</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                   <Link to="/testfetch">Test Fetch</Link> 
                </li>
                <li>
                    <Link to="/jeopardy">Jeopardy</Link>
                </li>
            </ul>
        </div>
    )
}



export default Navigation