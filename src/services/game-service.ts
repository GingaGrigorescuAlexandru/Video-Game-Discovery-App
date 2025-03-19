import apiClient from './api-client';
import create from './http-service';

interface Game {
    id: number;
    name: string;
    background_image: string;
    }

export interface FetchGamesResponse {
    count: number,
    results: Game[];
    }

export default create('/games');