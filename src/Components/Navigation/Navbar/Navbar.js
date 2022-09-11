import React from "react"
import "./Navbar.css"
import Navitems from "../Navitems/Navitems"

export default function Navbar(props){
    return(
        <header className="navbar">
            <nav>
                <Navitems />
            </nav>
        </header>
    )
}