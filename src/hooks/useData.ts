import { useState, useEffect } from 'react';
import { CanceledError } from '../services/api-client';
import HttpService from '../services/http-service';
import { GameQuery } from '../App.tsx';


interface FetchResponse<T> {
    count: number,
    results: T[];
    }

const useData = <T>(service: HttpService,
                    {genre, platform, sortOrder}: gameQuery | null = {},
                    deps?: any[] ) => {
    const [ data, setData ] = useState<T[]>([]);
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
      setLoading(true);
      const { request, cancel } = service.getAll<FetchResponse>({params:
                                                        { parent_platforms: platform?.id,
                                                          genres: genre?.id,
                                                          ordering: sortOrder
                                                        }});
      request.then(res => setData(res.data.results))
      .catch(err => {
          if (err instanceof CanceledError ) return;
          setError(err.message)
          })
      .finally(() => setLoading(false));
      return () => cancel;
      }, deps ? [...deps] : []);

    return { data, error, loading, setData, setError }
    }

export default useData;