import apiClient from './api-client';
import { Genre } from './genre-service';
import create from './http-service';

export interface Platform {
    id: number;
    name: string;
    slug: string;
    }

export interface Game {
    id: number;
    name: string;
    genres: Genre[];
    metacritic: number;
    background_image: string;
    parent_platforms: { platform: Platform}[]
    ordering: string;
    }

export default create('/games');