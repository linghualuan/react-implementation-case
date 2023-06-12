import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000,
})

service.interceptors.request.use(
    config => {
        console.log('config', config)
        return config
    },
    err => {
        console.log('err', err)
    }
)

service.interceptors.response.use(
    config => {
        console.log('config', config)
        return config
    },
    err => {
        console.log('err', err)
    }
)

export default service