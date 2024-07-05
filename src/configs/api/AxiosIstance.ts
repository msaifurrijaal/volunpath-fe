import axios from "axios";

const AxiosInstance = () => {
    const res = axios.create({
        baseURL: 'https://volunpath-rest.vercel.app',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return res
}

export default AxiosInstance;