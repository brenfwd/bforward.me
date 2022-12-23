import { useMemo, useState, useEffect } from "preact/hooks";

interface PromiseResult<T> {
  pending: false;
  error: null;
  result: T;
}

interface PromiseError<E = unknown> {
  pending: false;
  error: E;
  result: null;
}

interface PromisePending {
  pending: true;
  error: null;
  result: null;
}

const newPromiseResult = <T>(result: T): PromiseResult<T> => ({ pending: false, error: null, result });
const newPromiseError = <E = unknown>(error: E): PromiseError<E> => ({ pending: false, error, result: null });
const newPromisePending = (): PromisePending => ({ pending: true, error: null, result: null });

export type UnwrappedPromise<T, E = unknown> = PromiseResult<T> | PromiseError<E> | PromisePending;

type AsyncFunction<T, Args extends any[]> = (...args: Args) => Promise<T>;

export function usePromise<T, Args extends any[]>(callback: AsyncFunction<T, Args>, args: Args) {
  const [unwPromise, setUnwPromise] = useState<UnwrappedPromise<T>>(newPromisePending);
  const promise = useMemo(() => callback(...args), [callback, ...args]);
  useEffect(() => {
    promise
      .then((result) => setUnwPromise(newPromiseResult(result)))
      .catch((error) => setUnwPromise(newPromiseError(error)));
  }, [promise]);
  return unwPromise;
}

export function createPromiseHook<T, Args extends any[]>(callback: AsyncFunction<T, Args>) {
  return (...args: Args) => usePromise(callback, args);
}
