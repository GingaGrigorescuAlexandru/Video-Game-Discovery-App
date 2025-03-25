import apiClient from './api-client';
import create from './http-service';

export interface ParentPlatform {
    id: number;
    name: string;
    slug: string;
    }

export default create('/platforms/lists/parents');