import Image from 'next/image';
import { HeroHeading } from '@haqq-nft/ui-kit';
import { Instructions } from './instructions/instructions';
import fullEclipse from '../../assets/images/half-eclipse.png';
import sunrise from '../../assets/images/sunrise.png';

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
      <div className="border-haqq-border flex border-b px-[40px] py-[34px] lg:px-[80px] lg:py-[68px]">
        <HeroHeading className="sm:text-[70px] lg:text-[70px]">
          Air drop Republic
        </HeroHeading>
      </div>

      <Instructions />

      <SunriseBackground />
    </div>
  );
}
