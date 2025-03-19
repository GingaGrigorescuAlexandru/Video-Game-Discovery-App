import { useState, useEffect } from 'react';
import gameService, { Game, FetchGamesResponse } from '../services/game-service';
import { CanceledError } from '../services/api-client';
import { Text } from '@chakra-ui/react';

const GameGrid = () => {
    const [ games, setGames ] = useState<Game[]>([]);
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
      const { request, cancel } = gameService.getAll<FetchGamesResponse>();
      request.then(res => setGames(res.data.results))
      .catch(err => setError(err.message));
      return () => cancel;
      }, []);

    return (
        <>
        <ul>
            { games && games.map(game =>
                <li key={game.id}>{game.name}</li>)}
        </ul>
        { error && <Text>{error}</Text>}
        </>
        )
    }

export default GameGrid;