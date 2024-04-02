import { useMediaQuery } from 'react-responsive';

export function useTabletMediaQuery() {
  return useMediaQuery({ query: '(max-width: 1023px)' });
}
