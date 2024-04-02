import { ReactNode } from 'react';
import { Metadata } from 'next';
import './global.scss';
import { AuthProvider, ConfigProvider } from '@haqq-nft/data-api';
import { FooterInfo, SharedHeader } from '@haqq-nft/shared-components';
import { Page } from '@haqq-nft/ui-kit';
import {
  SelectWalletModalWrapper,
  WalletProvider,
  Web3ConnectionBtns,
  Web3Provider,
} from '@haqq-nft/web3-connections';

const DOMAIN = 'https://ecosystem-nft-frontend.vercel.app';

export const metadata: Metadata = {
  title: 'Ecosystem Token',
  description: 'Buy your first Ecosystem Token with ISLM',
  openGraph: {
    title: 'Ecosystem Token',
    description: 'Buy your first Ecosystem Token with ISLM',
    type: 'website',
    url: DOMAIN,
    images: `${DOMAIN}/shared-bg.png`,
    siteName: 'Ecosystem Token',
  },
  twitter: {
    site: DOMAIN,
    images: `${DOMAIN}/shared-bg.png`,
    title: 'Ecosystem Token',
    description: 'Buy your first Ecosystem Token with ISLM',
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
                    footer={<FooterInfo />}
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

const WALLET_CONNECT_PROJECT_ID = '9fb33c647eb8257e76a5a5025a35b14d';

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
