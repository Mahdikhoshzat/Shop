import React from "react";
import { Link } from "react-router-dom"
import "./Navitem.css"
export default function Navitem(props){
    return(
        <li className="nav-item">
            <Link to={props.link}>{props.children}</Link>
        </li>
    )
}