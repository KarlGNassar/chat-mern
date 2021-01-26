import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://chat-backendd.herokuapp.com'
})

export default instance