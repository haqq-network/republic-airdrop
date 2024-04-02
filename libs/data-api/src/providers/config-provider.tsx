'use client';

import { createContext, ReactNode } from 'react';
import { Hex } from 'viem';

export interface AppConfig {
  apiUrl?: string;
  mintAddress: Hex;
}

const config = {
  mintAddress: '0x4305afEc41f595000aaFa4bE5fa6071Ffc822Fc5' as Hex,
};

export const ConfigProviderContext = createContext<AppConfig | null>(null);

export function ConfigProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProviderContext.Provider value={config}>
      {children}
    </ConfigProviderContext.Provider>
  );
}
