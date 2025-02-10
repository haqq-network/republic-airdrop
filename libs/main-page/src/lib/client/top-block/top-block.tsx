import Image from 'next/image';
import { HeroHeading } from '@haqq-nft/ui-kit';
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
        <div className="flex max-w-[800px] flex-col gap-[24px] rounded-[8px] bg-[#202021] px-[28px] py-[32px] font-[500]">
          <div>
            Thank you for participating in the ISLM token public sale on
            Republic. The bonus distribution process has been successfully
            completed. All eligible participants should have received their
            tokens at their specified addresses.
          </div>
          <div className="flex flex-col gap-[12px]">
            <div>
              If you have any questions about your bonus distribution or need
              support, please contact our support team. We appreciate your
              participation and continued support of the HAQQ ecosystem. The
              Republic bonus distribution page is now closed as all
              distributions have been completed.
            </div>
          </div>
        </div>
      </div>

      <SunriseBackground />
    </div>
  );
}
