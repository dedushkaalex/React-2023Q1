import React, { useCallback, useEffect, useState } from 'react';

const DEFAULT_OPTIONS = {
  headers: { 'Content-type': 'application/json' },
};

interface AsyncHookProps<T> {
  loading: boolean;
  error?: string;
  value?: T;
}

function useAsync<T>(
  callback: () => Promise<T>,
  dependencies: React.DependencyList = []
): AsyncHookProps<T> {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>('');
  const [value, setValue] = useState<T>();

  const callbackFn = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackFn();
  }, [callbackFn]);

  return { loading, error, value };
}

export function useFetch<RES>(url: string, options: RequestInit = {}, dependencies = []) {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
      if (res.ok) return res.json() as RES;
      return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
}
