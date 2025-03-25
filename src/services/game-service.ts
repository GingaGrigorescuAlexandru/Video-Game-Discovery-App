import apiClient from './api-client';
import create from './http-service';

export interface Platform {
    id: number;
    name: string;
    slug: string;
    }

export interface Game {
    id: number;
    name: string;
    metacritic: number;
    background_image: string;
    parent_platforms: { platform: Platform}[]
    }

export default create('/games');