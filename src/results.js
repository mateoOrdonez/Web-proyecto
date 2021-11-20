import axios from "axios";
export default axios.create(
    {
        baseURL: 'https://proyectofinalweb-2c536-default-rtdb.firebaseio.com/'
    }
)