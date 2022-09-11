import React from "react"
import "./Navitems.css"
import Navitem from "../Navitem/Navitem"

export default function Navitems(props){
    return(
        <ul className="nav-items">
            <Navitem link="/">Shopping</Navitem>
            <Navitem link="/Account">Account</Navitem>
        </ul>
    )
}