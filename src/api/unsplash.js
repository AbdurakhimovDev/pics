import axios from "axios";
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID kirXU6kICTUwzfNBa1X_TEdfWSi6ht76xyKSnMRhQzo'
    }
})