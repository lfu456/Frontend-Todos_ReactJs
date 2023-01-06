import axios from "axios"

const instance = axios.create({
    timeout: 30000,
    baseURL: process.env.REACT_APP_URL_API
});
instance.interceptors.response.use(
    (response) => {return response.data},
    (error) => {console.log(error)}
)
export default instance