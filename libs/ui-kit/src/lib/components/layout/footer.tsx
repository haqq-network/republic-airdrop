import clsx from 'clsx';
import { formatEthDecimal } from '@haqq-nft/utils';
import { Container } from './layout';
import { HaqqStarIcon } from '../icons/icons';
import { BlockLoading } from '../page-loader/page-loader';
import { HaqqHeading } from '../typography/heading';
import { Text } from '../typography/text';

interface IProps {
  totalSupply: bigint;
  priceChange7d: bigint;
  priceChange30d: bigint;
  loading: boolean;
  balance?: bigint;
}

export function Footer({
  totalSupply,
  priceChange7d,
  priceChange30d,
  loading,
  balance,
}: IProps) {
  return (
    <footer className="border-haqq-border relative border-t px-[16px] py-[68px] md:px-[64px] lg:px-[80px] lg:py-[100px]">
      <Container>
        <div className="flex flex-col gap-y-[24px] lg:gap-y-[32px]">
          <HaqqHeading>About</HaqqHeading>
          <div className="flex flex-col gap-[16px] lg:flex-row lg:gap-[36px]">
            <FooterDataBadge
              value={formatEthDecimal(priceChange7d, 2, 0)}
              type="7dPrice"
              loading={loading}
            />

            <FooterDataBadge
              value={formatEthDecimal(priceChange30d, 2, 0)}
              type="30dPrice"
              loading={loading}
            />

            <FooterDataBadge
              value={formatEthDecimal(totalSupply)}
              type="tokensCount"
              loading={loading}
            />
            <FooterDataBadge
              value={formatEthDecimal(balance || 0)}
              type="ISLMFunds"
              loading={loading}
            />
          </div>
          <div>
            <div className="flex flex-row items-center gap-x-[10px]">
              <HaqqStarIcon />
              <span className="text-[12px] font-[500] uppercase leading-[18px] lg:text-[14px] lg:leading-[22px]">
                Token info
              </span>
            </div>
            <div className="mt-[12px]">
              <Text className="text-white/50">
                The HAQQ Ecosystem Token, a unique and innovative digital asset,
                serves as the core driving force of the HAQQ blockchain network,
                a burgeoning system that is steadily making its mark in the
                digital world. This token is not just an ordinary asset; it
                enables the smooth execution of transactions across the network,
                acting as the vital fuel that powers the operation of smart
                contracts, which are self-executing contracts with the terms of
                the agreement directly written into code.
              </Text>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute left-[16px] top-0 md:left-[64px] lg:left-[80px]">
        <FooterLines />
      </div>
    </footer>
  );
}

function FooterDataBadge({
  type,
  value,
  loading,
}: {
  value?: string;
  loading: boolean;
  type: '7dPrice' | '30dPrice' | 'tokensCount' | 'ISLMFunds';
}) {
  const isTextGreen =
    (type === '7dPrice' || type === '30dPrice') && !value?.includes('-');

  const isTextRed =
    (type === '7dPrice' || type === '30dPrice') && value?.includes('-');

  return (
    <div className="flex w-fit flex-col gap-y-[2px] font-[500]">
      <HaqqHeading
        className={clsx(
          isTextGreen && 'text-haqq-green',
          isTextRed && 'text-main-red',
        )}
      >
        {loading ? <BlockLoading /> : isTextGreen ? `+${value}%` : value}
      </HaqqHeading>

      <div className="text-[13px] leading-[20px] lg:text-[16px] lg:leading-[26px]">
        {type === '7dPrice' && 'Price for 7D'}
        {type === '30dPrice' && 'Price for 30D'}
        {type === 'tokensCount' && 'Tokens issued'}
        {type === 'ISLMFunds' && 'ISLM funds accumulated on the smart contract'}
      </div>
    </div>
  );
}

function FooterLines() {
  return (
    <svg
      width="741"
      height="51"
      viewBox="0 0 741 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 0.5L0.499998 50.5" stroke="#565657" />
      <path d="M20.5 0.5V14.5" stroke="#565657" />
      <path d="M40.5 0.5V14.5" stroke="#565657" />
      <path d="M60.5 0.5V14.5" stroke="#565657" />
      <path d="M80.5 0.5V14.5" stroke="#565657" />
      <path d="M100.5 0.5V14.5" stroke="#565657" />
      <path d="M120.5 0.5V14.5" stroke="#565657" />
      <path d="M140.5 0.5V14.5" stroke="#565657" />
      <path d="M160.5 0.5V14.5" stroke="#565657" />
      <path d="M180.5 0.5V14.5" stroke="#565657" />
      <path d="M200.5 0.5V14.5" stroke="#565657" />
      <path d="M220.5 0.5V14.5" stroke="#565657" />
      <path d="M240.5 0.5V14.5" stroke="#565657" />
      <path d="M260.5 0.5V14.5" stroke="#565657" />
      <path d="M280.5 0.5V14.5" stroke="#565657" />
      <path d="M300.5 0.5V14.5" stroke="#565657" />
      <path d="M320.5 0.5V14.5" stroke="#565657" />
      <path d="M340.5 0.5V14.5" stroke="#565657" />
      <path d="M360.5 0.5V14.5" stroke="#565657" />
      <path d="M380.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.9" d="M400.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.9" d="M420.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.8" d="M440.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.8" d="M460.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.7" d="M480.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.7" d="M500.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.6" d="M520.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.6" d="M540.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.5" d="M560.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.5" d="M580.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.4" d="M600.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.4" d="M620.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.3" d="M640.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.3" d="M660.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.2" d="M680.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.2" d="M700.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.1" d="M720.5 0.5V14.5" stroke="#565657" />
      <path opacity="0.1" d="M740.5 0.5V14.5" stroke="#565657" />
    </svg>
  );
}
