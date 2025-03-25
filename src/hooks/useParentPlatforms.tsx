import useData from './useData';
import parentPlatformService, { ParentPlatform } from '../services/parent-platform-service.ts';

const useParentPlatforms = () => useData<ParentPlatform>(parentPlatformService)

export default useParentPlatforms;