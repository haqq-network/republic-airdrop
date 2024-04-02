import clsx from 'clsx';
import Image from 'next/image';
import { SubtractIcon } from '../icons/icons';
import { SpinnerLoader } from '../spinner-loader/spinner-loader';

export function AvatarImage({
  image,
  isLoading,
  containerClassName,
  className,
  classNameSubtract,
  alt = 'Avatar',
  noBg,
}: {
  image?: string;
  isLoading?: boolean;
  containerClassName?: string;
  classNameSubtract?: string;
  className?: string;
  alt?: string;
  noBg?: boolean;
}) {
  return (
    <div
      className={clsx(
        'relative flex h-[48px] w-[48px] flex-col items-center rounded-[8px]',
        isLoading && 'bg-opacity-50',
        image
          ? 'h-[42px] w-[42px]'
          : 'h-[148px] w-[148px] border border-white/15 px-[39px] py-[34px]',
        noBg ? 'bg-transparent' : 'bg-dark-graphite border border-white/15',
        containerClassName,
      )}
    >
      {image && !isLoading ? (
        <Image src={image} alt={alt} fill className={className} />
      ) : (
        <SubtractIcon className={clsx('flex-1', classNameSubtract)} />
      )}
      {isLoading && (
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-white">
          <SpinnerLoader />
        </div>
      )}
    </div>
  );
}
