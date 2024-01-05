import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

// Define the interfaces for your data
interface CarType {
  vehicle: string;
  imageURL: string;
  price: string;
  description: string[];
}

interface Type {
  id: number;
  category_id: number;
  car_type: CarType[];
}

interface Category {
  id: number;
  name: string;
  imageURL: string;
}

interface Data {
  category: Category[];
  type: Type[];
}

export const fetchData = async (): Promise<Data> => {
  try {
    const response = await apiClient.get<Data>('/vehicles'); // Assuming your endpoint is '/'
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

const useData = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, []);

  return { data, loading, error };
};

export default useData;
