import { useState, useEffect } from 'react';
import { CanceledError } from '../services/api-client';
import HttpService from '../services/http-service';
import { Genre } from '../services/genre-service.ts';
import { ParentPlatform } from '../services/parent-platform-service.ts';

interface FetchResponse<T> {
    count: number,
    results: T[];
    }

const useData = <T>(service: HttpService, selectedPlatform?: ParentPlatform, deps?: any[] ) => {
    const [ data, setData ] = useState<T[]>([]);
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
      setLoading(true);
      const { request, cancel } = service.getAll<FetchResponse>({params: { parent_platforms: selectedPlatform?.id}});
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