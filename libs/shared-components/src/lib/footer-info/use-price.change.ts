'use client';

import { useQuery } from '@tanstack/react-query';
import { useChainId } from 'wagmi';
import { apiGetFetcher, useApiUrl } from '@haqq-nft/data-api';

interface PriceChangeResponse {
  price: number;
}

export const usePriceChange = (timePeriod: '7d' | '30d') => {
  const url = useApiUrl();
  const chainId = useChainId();

  return useQuery<PriceChangeResponse, Error, PriceChangeResponse, [string]>({
    queryKey: [`usePriceChange_${timePeriod}_${chainId}`],
    queryFn: async () => {
      return apiGetFetcher(`${url}/${timePeriod}`);
    },
  });
};
