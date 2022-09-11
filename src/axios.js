import axios from "axios"
const instance = axios.create({
    baseURL: "https://react-redux-main-a7c22-default-rtdb.firebaseio.com/"
})
export default instance