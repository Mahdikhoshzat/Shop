import React from "react";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button"
import "./Account.css"
import axios from "../../axios"

class Account extends React.Component{
    state = {
        form: {
            Name:{
                elementType: "input",
                inputConfig:{
                    type: "text",
                    placeholder: "Name..."
                },
                value: "",
                validation:{
                    required: true
                },
                isValid: false,
                notUsed: true
            },
            email:{
                elementType: "input",
                inputConfig:{
                    type: "text",
                    placeholder: "Email..."
                },
                value: "",
                validation:{
                    required: true
                },
                isValid: false,
                notUsed: true
            },
            password:{
                elementType: "input",
                inputConfig:{
                    type: "password",
                    placeholder: "Password..."
                },
                value: "",
                validation:{
                    required: true
                },
                isValid: false,
                notUsed: true
            }
        }
    }

    checkValidation(value,rules){
        let valided = false
        if(rules.required){
            valided=(value.trim() !== "")
        }
        return valided
    }
sumbitHandler(event){
    event.preventDefault()
    const person = {}
    for(let item in this.state.form){
        person[item] = this.state.form[item].value
    }
    axios.post("/Accounts.json",person).then((response) => {
        console.log(response)
    })
    .catch((error) => console.log(error))

}

inputChangeHandler(event,inputElement){
    const updatedForm = {...this.state.form}
    const updatedElement = {...updatedForm[inputElement]}
    updatedElement.value = event.target.value
    updatedElement.isValid = this.checkValidation(updatedElement.value,updatedElement.validation)
    updatedElement.notUsed = false
    updatedForm[inputElement] = updatedElement
    

    this.setState({form: updatedForm})
}

borderChanger(con1,con2){
    return (con1 || con2)
}

    render(){

        const elementsArray = []

        for(let item in this.state.form){
            elementsArray.push({
                id: item,
                config: this.state.form[item]
            })
        }

        return(
            <div className="account">
                <h2>Account</h2>
                <form onSubmit={this.sumbitHandler.bind(this)} className="acc">
                    {elementsArray.map((item) => {
                        return(
                            <Input
                                key={item.id}
                                validCheck = {this.borderChanger(item.config.isValid,item.config.notUsed)}
                                elementType={item.config.elementType}
                                elementConfig = {item.config.inputConfig}
                                value={item.config.value}
                                change={(event) => this.inputChangeHandler(event,item.id)}
                            />
                        )
                    })}
                    <Button btnType={"form"}>Submit</Button>
                </form>
            </div>
        )
    }
}
export default Account