import React from "react"
import "./Modal.css"
import Wrapper from "../../../hoc/Wrapper"
import BackDrop from "../BackDrop/BackDrop"
export default function Modal(props){
    return(
        <Wrapper>
            <BackDrop show={props.show} click={props.modalClose}/>
            {props.show ?
                <div className="modal">
                {props.children}
                </div>
                : null}
            
    </Wrapper>
    )
}