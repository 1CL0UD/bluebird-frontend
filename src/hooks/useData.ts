import { useEffect, useState } from 'react';
// import apiClient from '../services/api-client';
import vehicleResponse from '../data/vehicle-response';

export interface Data {
  category: {
    id: number;
    name: string;
    imageURL: string;
  }[];
  type: {
    id: number;
    category_id: number;
    car_type: {
      vehicle: string;
      imageURL: string;
      price: string;
      description: string[];
    }[];
  }[];
}

export interface CarType {
  vehicle: string;
  imageURL: string;
  price: string;
}

export const fetchData = async (): Promise<Data> => {
  try {
    // const response = await apiClient.get<Data>('/vehicles');
    const response = { data: vehicleResponse, isLoading: false, error: null };
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
