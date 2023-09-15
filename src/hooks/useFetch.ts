import { useState } from 'react';

interface ApiResponse<T> {
    callAPI: (url: string) => Promise<void>;
    data?: T;
    isLoading: boolean;
    error: {
        code?: number;
        message?: string;
    };
}

function useFetch<T>(): ApiResponse<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ code?: number; message?: string }>({
    code: undefined,
    message: undefined,
  });

  const callAPI = async (url: string) => {
    setIsLoading(true);
    setError({ code: undefined, message: undefined });

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const responseData: T = await response.json();
      setData(responseData);
    } catch (err: any) {
      setError({ code: err?.code, message: err?.message });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    callAPI,
    data,
    isLoading,
    error,
  };
}

export default useFetch;
