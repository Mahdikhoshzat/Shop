import React from "react"
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Shopping from "./Container/Shopping/Shopping"
import Checkout from "./Container/Checkout/Checkout"
import Account from "./Container/Account/Account"

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Layout>
                        <Routes>   
                            <Route path="/" exact element={<Shopping/>}/>
                            <Route path="Checkout" element={<Checkout/>}/>
                            <Route path="Account" element={<Account/>}/>
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </div>
        )
    }
}

export default App