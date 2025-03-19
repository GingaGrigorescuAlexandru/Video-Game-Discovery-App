import axios, { CanceledError } from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '367eb96de67846e3b042e59523592ebc'
    }
});

export { CanceledError };

