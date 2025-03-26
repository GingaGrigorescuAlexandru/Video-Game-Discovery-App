import useData from './useData';
import gameService, { Game } from '../services/game-service.ts';
import { GameQuery } from '../App.tsx';

const useGames = (gameQuery: GameQuery ) =>
                  useData<Game>(gameService,
                                gameQuery,
                                [gameQuery])

export default useGames;