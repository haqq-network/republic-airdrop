'use client';

import { useQuery } from '@tanstack/react-query';
import { useChainId } from 'wagmi';
import { apiGetFetcher, useApiUrl } from '@haqq-nft/data-api';

type IHistoricalItem = [string, number];

interface ChartDataResponse {
  historical: IHistoricalItem[];
}

export function useChartData() {
  const url = useApiUrl();
  const chainId = useChainId();

  return useQuery<ChartDataResponse, Error, ChartDataResponse, [string]>({
    queryKey: [`useChartData_${chainId}`],
    queryFn: async () => {
      return apiGetFetcher(`${url}/historical`);
    },
  });
}
