import { RAWG_API_URL, RAWG_API_KEY } from '../config';
import axios, { CanceledError } from 'axios';


export default axios.create({
    baseURL: RAWG_API_URL,
    params: {
        key: RAWG_API_KEY
    }
});

export { CanceledError };

