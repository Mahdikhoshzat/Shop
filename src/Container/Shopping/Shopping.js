import React from "react"
import Wrapper from "../../hoc/Wrapper"
import Control from "../../Components/Control/Control"
import Modal from "../../Components/UI/Modal/Modal"
import Order from "../../Components/Order/Order"
import axios from "../../axios"
import Loader from "../../Components/UI/Loader/Loader"


const prices ={
    product1: 100,
    product2: 200,
    product3: 300,
    product4: 400,
}

class Shopping extends React.Component{
    state = {
        products: null,
        totalPrice: 0,
        purchased : false,
        loading : false
    }

    componentDidMount(){
        axios.get("https://react-redux-main-a7c22-default-rtdb.firebaseio.com/products.json").then((response) => {
            this.setState({products: response.data})
        })
    }

    addProductHandler(type){
        const prevCount = this.state.products[type]
        const updatedCount = prevCount + 1
        const updatedProducts = {
            ...this.state.products
        }
        updatedProducts[type] = updatedCount
        const priceAdd = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice + priceAdd
        this.setState({totalPrice: newPrice,products: updatedProducts})
    }
removeProductHandler(type){
    const prevCount = this.state.products[type]
    const updatedCount = prevCount - 1
    const updatedProducts = {
        ...this.state.products
    }
    updatedProducts[type] = updatedCount
    const addPrice = prices[type]
    const prevPrice = this.state.totalPrice
    const newPrice = prevPrice - addPrice
    this.setState({products: updatedProducts , totalPrice: newPrice})
}

purchasedHandler(){
    this.setState({purchased: true})
}
modalCloseHandler(){
    this.setState({purchased: false})
}
continuePurchaseHandler(){
    this.props.history.push("/Checkout")
    this.setState({ loading: true})
    const posted_data = {
        products:this.state.products,
        price: this.state.totalPrice,
        costumer: {
            Name: "Mahdi Khoshzat",
            Email: "mahdikhoshzat2003@gmail.com"
        }
    }
    axios.post("/Order.json",posted_data).then((response) => {
        this.setState({ loading: false , purchased: false})
    })
    .catch((error) => this.setState({ loading: false,purchased: false}))

}

    render(){
let order = <Order products={this.state.products}
cancel={this.modalCloseHandler.bind(this)}
continue={this.continuePurchaseHandler.bind(this)}
toPrice={this.state.totalPrice}
/>

if(this.state.loading){
    order = <Loader />
}

let controls = <Loader />
if(this.state.products){
    controls =  <Control
    productAdd = {this.addProductHandler.bind(this)} 
    productRemove = {this.removeProductHandler.bind(this)}
    price= {this.state.totalPrice}
    buy={this.purchasedHandler.bind(this)}
    />
}

        return(
            <Wrapper>
                <div>
                    <Modal 
                    show={this.state.purchased} 
                    modalClose={this.modalCloseHandler.bind(this)}
                    >
                        {order}
                    </Modal>
                    {controls}
                </div>
            </Wrapper>
        )
    }
}

export default Shopping