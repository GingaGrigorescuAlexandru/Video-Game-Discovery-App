import useData from './useData';
import gameService, { Game } from '../services/game-service.ts';
import { Genre } from '../services/genre-service.ts';
import { ParentPlatform } from '../services/parent-platform-service.ts';


const useGames = (selectedGenre: Genre | null,
                  selectedPlatform: ParentPlatform | null ) =>
                  useData<Game>(gameService,
                                selectedGenre,
                                selectedPlatform,
                                [selectedGenre?.id, selectedPlatform?.id])

export default useGames;