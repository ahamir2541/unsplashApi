import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4ed6264370a1bac6ec82f6925589c7f99188b0b368d9be57790d0b29aaa6187b'
    }
})