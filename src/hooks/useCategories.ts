import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Categories {
  id: number;
  name: string;
  imageUrl: string;
}

interface FetchResponse<T> {
  category: T[];
}

const useCategories = <Categories>(endpoint: string) => {
  const [data, setData] = useState<Categories[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<Categories>>(endpoint)
      .then((res) => {
        setData(res.data.category);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useCategories;
