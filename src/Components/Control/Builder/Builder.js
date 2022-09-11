import React from "react"
import "./Builder.css"


export default function Builder(props){
    return(
        <div className="Builder">
            <div>{props.title}</div>
            <button onClick={props.add}>Add</button>
            <button onClick={props.remove}>Remove</button>
        </div>
    )
}