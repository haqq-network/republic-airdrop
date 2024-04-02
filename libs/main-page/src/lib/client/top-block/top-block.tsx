import clsx from 'clsx';
import Image from 'next/image';
import { HeroHeading, Text } from '@haqq-nft/ui-kit';
import fullEclipse from '../../assets/images/half-eclipse.png';
import sunrise from '../../assets/images/sunrise.png';
import { Chart } from '../chart/chart';
import { MintFormWrapper } from '../mint-form-wrapper/mint-form-wrapper';

function SunriseBackground() {
  return (
    <div className="absolute inset-0 z-[-1]">
      <Image
        alt=""
        src={sunrise.src}
        height={sunrise.height}
        width={sunrise.width}
        className="absolute left-0 top-0 z-[-1] w-full translate-y-[20%] scale-125"
      />
      <Image
        alt=""
        src={fullEclipse.src}
        height={fullEclipse.height}
        width={fullEclipse.width}
        className="absolute left-0 top-0 z-[-1] w-full translate-y-[109%] scale-125"
      />
    </div>
  );
}

export function TopBlock() {
  return (
    <div className="relative overflow-x-clip ">
      <div
        className={clsx(
          'z-10 flex flex-col items-start justify-center',
          'px-[16px] sm:px-[64px] lg:px-[80px]',
          'py-[68px] sm:pb-[90px] sm:pt-[80px] lg:pb-[120px] lg:pt-[110px]',
          'lg:min-h-[calc(100vh-73px)]',
        )}
      >
        <HeroHeading>
          EcoSystem <br />
          Token
        </HeroHeading>
        <div className="mt-[32px] flex flex-col gap-[16px] lg:max-w-[700px]">
          <Text size="large" className="font-clash">
            The native token of the HAQQ ecosystem
          </Text>
        </div>
      </div>
      <div className="border-haqq-border relative grid grid-cols-1 gap-[80px] border-t px-[16px] py-[100px] sm:px-[64px] md:grid-cols-2 lg:px-[80px]">
        <MintFormWrapper />
        <div className="bg-haqq-border absolute left-0 top-[59.5%] h-[1px] w-full sm:top-1/2 md:left-1/2 md:top-0 md:block md:h-full md:w-[1px]" />
        <Chart />
      </div>

      <SunriseBackground />
    </div>
  );
}
