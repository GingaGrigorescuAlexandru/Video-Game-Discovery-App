import { useState, useEffect } from 'react';
import gameService, { Game, FetchGamesResponse } from '../services/game-service';
import { CanceledError } from '../services/api-client';

const useGames = () => {
    const [ games, setGames ] = useState<Game[]>([]);
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
      const { request, cancel } = gameService.getAll<FetchGamesResponse>();
      request.then(res => setGames(res.data.results))
      .catch(err => {
          if (err instanceof CanceledError ) return;
          setError(err.message)
          })
      .finally(() => setLoading(false));
      return () => cancel;
      }, []);

    return { games, error, loading, setGames, setError }
    }

export default useGames;