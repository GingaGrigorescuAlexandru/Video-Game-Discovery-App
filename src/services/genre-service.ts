import apiClient from './api-client';
import create from './http-service';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
    }

export default create('/genres');