import Image from 'next/image';
import { HeroHeading } from '@haqq-nft/ui-kit';
import { ConnectWalletButtons } from './connect-wallet-buttons/connect-wallet-buttons';
import sunriseImageData from '../../assets/images/index-page-sunrise-bg.png';

function SunriseBackground() {
  return (
    <Image
      alt=""
      src={sunriseImageData.src}
      height={sunriseImageData.height}
      width={sunriseImageData.width}
      className="3xl:top-[-600px] absolute top-[-150px] z-[-1] w-full rotate-180 sm:top-[-230px] lg:top-[-450px]"
    />
  );
}

export function TopBlock() {
  return (
    <div className="flex flex-1 flex-col overflow-x-clip">
      <div className="border-haqq-border flex border-b px-[40px] py-[48px] lg:px-[80px] lg:py-[68px]">
        <HeroHeading className="sm:text-[70px] lg:text-[70px]">
          Republic bonuses
        </HeroHeading>
      </div>

      <div className="flex flex-1 flex-col items-center gap-[70px] px-[40px] py-[40px] lg:px-[80px] lg:py-[60px]">
        <ConnectWalletButtons />
      </div>

      <SunriseBackground />
    </div>
  );
}
