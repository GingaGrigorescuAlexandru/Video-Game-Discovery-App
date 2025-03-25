import { useState, useEffect } from 'react';
import { CanceledError } from '../services/api-client';
import HttpService from '../services/http-service';

interface FetchResponse<T> {
    count: number,
    results: T[];
    }

const useData = <T>(service: HttpService, requestConfig?: AxiosRequestConfig) => {
    const [ data, setData ] = useState<T[]>([]);
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
      setLoading(true);
      const { request, cancel } = service.getAll<FetchResponse>();
      request.then(res => setData(res.data.results))
      .catch(err => {
          if (err instanceof CanceledError ) return;
          setError(err.message)
          })
      .finally(() => setLoading(false));
      return () => cancel;
      }, []);

    return { data, error, loading, setData, setError }
    }

export default useData;