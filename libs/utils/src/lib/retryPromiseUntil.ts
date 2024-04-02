import { sleep } from './sleep';

type AsyncFunction<T, R> = (...args: T[]) => Promise<R>;

export async function retryPromiseUntil<T, P extends AsyncFunction<any, T>>(
  promiseFn: P,
  retryCount: number,
  timeout: number,
  stopPredicate: (t: T) => boolean,
  errorMessage = 'Something went wrong',
) {
  for (let i = retryCount; i > 0; i--) {
    const result = await promiseFn();

    if (stopPredicate(result)) {
      return result;
    }

    await sleep(timeout);
  }
  throw new Error(errorMessage);
}
