import Image from 'next/image';
import cubeImage from '../../assets/logo-cube.svg';
import signImage from '../../assets/logo-sign.svg';

export function Logo({
  className,
  withSign = true,
}: {
  className?: string;
  withSign?: boolean;
}) {
  return (
    <div className="flex flex-row items-center gap-x-[8px]">
      <div className="relative h-[38px] w-[32px]">
        <Image src={cubeImage} alt="BAZAAR.ART" fill />
      </div>
      {withSign && (
        <div className="relative h-[30px] w-[63px]">
          <Image src={signImage} alt="BAZAAR.ART" fill />
        </div>
      )}
    </div>
  );
}
