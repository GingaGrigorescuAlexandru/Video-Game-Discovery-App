import useData from './useData';
import gameService, { Game } from '../services/game-service.ts';

const useGames = () => useData<Game>(gameService)

export default useGames;