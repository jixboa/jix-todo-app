import axios from 'axios'

export const BASE_URL = "http://localhost:5000/api"
export const IP_URL = "http://192.168.8.119:5000/api"
export const TEST_URL = "https://api-test.maximnyansa.com/api/v1"

const root = () => {
    return axios.create({
        baseURL: IP_URL,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
}
export default root
