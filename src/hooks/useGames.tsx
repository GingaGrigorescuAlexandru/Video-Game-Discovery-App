import useData from './useData';
import gameService, { Game } from '../services/game-service.ts';
import { Genre } from '../services/genre-service.ts';
import { ParentPlatform } from '../services/parent-platform-service.ts';


const useGames = (selectedPlatform: ParentPlatform | null ) =>
                    useData<Game>(gameService,
                                  selectedPlatform,
                                  [selectedPlatform?.id])

export default useGames;