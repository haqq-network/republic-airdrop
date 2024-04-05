import { useCallback } from 'react';
import axios from 'axios';
import { getKeplrWallet, usePersonalSign } from '@haqq-nft/web3-connections';

export interface IParticipateResponse {
  message?: string;
  address?: string;
}

export interface IParticipant {
  id: string;
  haqq_address: string;
  created_at: string;
  updated_at: string;
}

const HOST = 'https://haqqdrop.production.haqq.network';

export function useAirdropActions() {
  const handlePersonalSign = usePersonalSign();

  const checkAirdropAvailability = useCallback(async (bech32: string) => {
    const result = await axios.get<IParticipant>(`${HOST}/api/eco/${bech32}`, {
      headers: {
        'content-type': 'application/json',
      },
    });

    return result.data;
  }, []);

  const participateEvm = useCallback(
    async (
      haqqAddress: string,
      message: string,
      signature: string,
    ): Promise<IParticipant> => {
      try {
        const result = await axios.post<IParticipant>(
          `${HOST}/api/eco/${haqqAddress}/evm`,
          {
            message,
            signature,
          },
          {
            headers: {
              'content-type': 'application/json',
            },
          },
        );

        return result.data;
      } catch (e: any) {
        return e?.response?.data;
      }
    },
    [],
  );

  const participateCosmos = useCallback(
    async (
      message: string,
      signature: string,
      haqqAddress?: string,
    ): Promise<IParticipant> => {
      try {
        const result = await axios.post<IParticipant>(
          `${HOST}/api/eco/${haqqAddress}/kepplr`,
          {
            message,
            signature,
          },
          {
            headers: {
              'content-type': 'application/json',
            },
          },
        );

        return result.data;
      } catch (e: any) {
        return e?.response?.data;
      }
    },
    [],
  );

  const handleSignKeplr = useCallback(
    async (chainId: string, message: string) => {
      const keplrWallet = await getKeplrWallet();
      if (keplrWallet) {
        const { bech32Address } = await keplrWallet.getKey(chainId);

        const signatureArb = await keplrWallet?.signArbitrary(
          chainId,
          bech32Address,
          message,
        );

        return {
          signature: signatureArb.signature,
        };
      } else {
        return {
          signature: '',
        };
      }
    },
    [],
  );

  return {
    signEvm: handlePersonalSign,
    signKeplr: handleSignKeplr,
    checkAirdropAvailability,
    participateEvm,
    participateCosmos,
  };
}
