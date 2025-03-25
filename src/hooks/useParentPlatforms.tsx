import useData from './useData';
import parentPlatformService, { parentPlatform } from '../services/parent-platform-service.ts';

const useParentPlatforms = () => useData<parentPlatform>(parentPlatformService)

export default useParentPlatforms;