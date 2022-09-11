import React from "react"
import "./Control.css"
import Builder from "./Builder/Builder"

export default function Control(props){

    const products = [
        {title: "product1", type: "product1"},
        {title: "product2", type: "product2"},
        {title: "product3", type: "product3"},
        {title: "product4", type: "product4"}
    ]


    return(
        <div className="control">
            <div className="show-price">
                <p>Total Price: {props.price}</p>
            </div>
            {products.map((item) => 
            {
            return <Builder
                key={item.title}
                title={item.title}
                add={() => props.productAdd(item.type)}
                remove={() => props.productRemove(item.type)}
            />
            }
            )}
            <button onClick={props.buy} className="order-btn">Order</button>
            
        </div>
    )
}