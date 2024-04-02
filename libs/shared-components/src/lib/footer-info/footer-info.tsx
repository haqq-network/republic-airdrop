'use client';

import { parseEther } from 'viem';
import { useChainId, useBalance } from 'wagmi';
import { useConfig } from '@haqq-nft/data-api';
import { Footer } from '@haqq-nft/ui-kit';
import { useTotalSupply, useIslmEstimated } from '@haqq-nft/web3-connections';
import { usePriceChange } from './use-price.change';

const usePriceChangeCalculation = (
  priceOld: number | undefined,
  priceCurrent: bigint,
) => {
  if (!priceOld || !priceCurrent) {
    return 0n;
  }

  const priceOldBigInt = parseEther(priceOld.toString());

  const priceChange = ((priceCurrent - priceOldBigInt) * 100n) / priceOldBigInt;

  return priceChange;
};

export const FooterInfo = () => {
  const { value: totalSupply, loading } = useTotalSupply();

  const { value: price, loading: loadingPrice } = useIslmEstimated(1);

  const { mintAddress } = useConfig();

  const chainId = useChainId();

  const { data: balanceData } = useBalance({
    address: mintAddress,
    chainId: chainId,
  });

  const { data: data7d, isLoading: loading7d } = usePriceChange('7d');
  const { data: data30d, isLoading: loading30d } = usePriceChange('30d');

  const priceChange7d = usePriceChangeCalculation(data7d?.price, price);
  const priceChange30d = usePriceChangeCalculation(data30d?.price, price);

  return (
    <Footer
      loading={loading || loadingPrice || loading7d || loading30d}
      priceChange7d={priceChange7d}
      priceChange30d={priceChange30d}
      totalSupply={totalSupply}
      balance={balanceData?.value}
    />
  );
};
