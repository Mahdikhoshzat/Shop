import React from "react"
import Wrapper from "../../hoc/Wrapper"
import Button from "../UI/Button/Button"
import { Link } from "react-router-dom"
export default function Order(props){
    const summary = Object.keys(props.products).map((item) => {
        return(
            <li key={item}>
                {item}: {props.products[item]}
            </li>
        )
    })
    return(
        <Wrapper>
            <h3>Orders</h3>
            <ul>
                {summary}
            </ul>
            <h3>Total Price: {props.toPrice}</h3>
                <p>Continue?</p>
                <Button btnType={"danger"} click={props.cancel}>No</Button>
                <Link to={"/checkOut"}>
                    {<Button btnType={"success"} click={props.continue}>Yes</Button>}
                </Link>
                

        </Wrapper>
    )

}