import React from "react";
import "./Input.css"

export default function Input(props){
    let inputType = null
    switch(props.type) {
        case "input":
            inputType = <input className={`inputDy ${props.validCheck}`} {...props.elementConfig} value={props.value} onChange={props.change} />;
            break
        default :
            inputType = <input className={`inputDy ${props.validCheck}`} {...props.elementConfig} value={props.value} onChange={props.change}/>;
    }
    

    return(
        <div className="inputClass">
            {inputType}
        </div>
    )
}