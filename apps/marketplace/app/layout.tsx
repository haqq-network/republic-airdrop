import { ReactNode } from 'react';
import { Metadata } from 'next';
import './global.scss';
import { AuthProvider, ConfigProvider } from '@haqq-nft/data-api';
import { SharedHeader } from '@haqq-nft/shared-components';
import { Page } from '@haqq-nft/ui-kit';
import {
  SelectWalletModalWrapper,
  WalletProvider,
  Web3ConnectionBtns,
  Web3Provider,
} from '@haqq-nft/web3-connections';

const DOMAIN = 'https://republic-airdrop.vercel.app/';

export const metadata: Metadata = {
  title: 'Republic Bonuses',
  description: 'Approve your new airdrop address',
  openGraph: {
    title: 'Republic Bonuses',
    description: 'Approve your new airdrop address',
    type: 'website',
    url: DOMAIN,
    images: `${DOMAIN}/shared-bg.png`,
    siteName: 'Republic Bonuses',
  },
  twitter: {
    site: DOMAIN,
    images: `${DOMAIN}/shared-bg.png`,
    title: 'Republic Bonuses',
    description: 'Approve your new airdrop address',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id="body_over">
        <ConfigProvider>
          <Web3ProviderWrapper>
            <AuthProvider>
              <WalletProvider>
                <SelectWalletModalWrapper>
                  <Page
                    header={
                      <SharedHeader>
                        <Web3ConnectionBtns />
                      </SharedHeader>
                    }
                  >
                    {children}
                  </Page>
                </SelectWalletModalWrapper>
              </WalletProvider>
            </AuthProvider>
          </Web3ProviderWrapper>
        </ConfigProvider>
      </body>
    </html>
  );
}

const WALLET_CONNECT_PROJECT_ID = process.env['NEXT_PUBLIC_WALLET_CONNECT_ID'];

const Web3ProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Web3Provider
      walletConnectProjectId={WALLET_CONNECT_PROJECT_ID}
      withDevtools={process.env['NODE_ENV'] !== 'production'}
    >
      {children}
    </Web3Provider>
  );
};
