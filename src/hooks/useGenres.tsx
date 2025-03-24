import { useState, useEffect } from 'react';
import genreService, { Genre, FetchGenresResponse } from '../services/genre-service';
import { CanceledError } from '../services/api-client';

const useGenres = () => {
    const [ genres, setGenres ] = useState<Genre[]>([]);
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
      const { request, cancel } = genreService.getAll<FetchGenresResponse>();
      request.then(res => setGenres(res.data.results))
      .catch(err => {
          if (err instanceof CanceledError ) return;
          setError(err.message)
          })
      .finally(() => setLoading(false));
      return () => cancel;
      }, []);

    return { genres, error, loading, setGenres, setError }
    }

export default useGenres;