import clsx from 'clsx';
import { Tooltip } from '../tooltip/tooltip';
import { Text } from '../typography/text';

export function TokenTabLarge({
  type,
  onClick,
}: {
  type: 'single' | 'multiple';
  onClick?: () => void;
}) {
  return (
    <div
      className="bg-modal-background flex w-full cursor-pointer flex-col items-center overflow-hidden rounded-[12px] border border-white/[8%] px-[14px] pb-[20px] pt-[40px] text-center transition-colors duration-150 hover:border-white/50 sm:max-w-[204px]"
      onClick={onClick}
    >
      {type === 'single' && <ImageSkeleton className="text-white/50" />}
      {type === 'multiple' && <ImageSkeletonHorizontal />}
      <div className="mt-[60px]">
        <Text size="large" isStretched>
          {type === 'single' && 'Single'}
          {type === 'multiple' && 'Multiple'}
        </Text>
      </div>
      <div className="mt-[8px] leading-none">
        <Text size="small" className="text-white/50">
          {type === 'single' &&
            'If you want to highlight the uniqueness and individuality of your item'}
          {type === 'multiple' &&
            'If you want to share your NFT with a large number of community members'}
        </Text>
      </div>
    </div>
  );
}

export function TokenTabMedium({
  type,
  isActive,
  onClick,
}: {
  type: 'single' | 'multiple' | 'custom';
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <Tooltip
      text="Create a collection and mint NFTs directly to your wallet"
      className="!left-3/4 !w-[240px]"
    >
      <div
        className={clsx(
          'flex h-[89px] w-full cursor-pointer flex-row items-center gap-x-[18px] overflow-hidden rounded-[12px] border px-[24px] py-[16px] transition-colors duration-150 sm:max-w-[303px]',
          isActive
            ? 'border-default-green'
            : 'border-graphite hover:border-white/50',
        )}
        onClick={onClick}
      >
        {type === 'single' && (
          <div className="text-white/50">
            <ImageSkeleton />
          </div>
        )}
        {type === 'multiple' && <ImageSkeletonVertical />}
        <div className="flex flex-col">
          <div>
            <Text size="large" isStretched>
              {type === 'single' && 'Single'}
              {type === 'multiple' && 'Multiple'}
            </Text>
          </div>
          <div className="line-clamp-2 text-[12px] font-[600] leading-[16px] text-white/50">
            {type === 'single' &&
              'If you want to highlight the uniqueness and individuality of your item'}
            {type === 'multiple' &&
              'Create a collection and mint NFTs directly to your wallet.'}
            {type === 'custom' &&
              'If you have already created a collection and want to mint NFTs to it.'}
          </div>
        </div>
      </div>
    </Tooltip>
  );
}

export function ImageSkeleton({ className }: { className?: string }) {
  return (
    <svg
      width="44"
      height="48"
      viewBox="0 0 44 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 1H2C1.44772 1 1 1.44772 1 2V46C1 46.5523 1.44772 47 2 47H42C42.5523 47 43 46.5523 43 46V2C43 1.44772 42.5523 1 42 1ZM2 0C0.895431 0 0 0.895432 0 2V46C0 47.1046 0.895431 48 2 48H42C43.1046 48 44 47.1046 44 46V2C44 0.895431 43.1046 0 42 0H2ZM39 4H5C4.44771 4 4 4.44772 4 5V23.7681L40 9.65995V5C40 4.44771 39.5523 4 39 4ZM4 26V24.8421L40 10.734V26C40 26.5523 39.5523 27 39 27H5C4.44771 27 4 26.5523 4 26ZM5 3C3.89543 3 3 3.89543 3 5V26C3 27.1046 3.89543 28 5 28H39C40.1046 28 41 27.1046 41 26V5C41 3.89543 40.1046 3 39 3H5ZM3 33H39V32H3V33ZM20 35.5H3V34.5H20V35.5ZM3 42.5V43.5H17V42.5H3ZM35 43.5H21V42.5H35V43.5ZM3 39.5H3.5V38.5H3V39.5ZM4.5 38.5V39.5H5.5V38.5H4.5ZM6.5 39.5H7.5V38.5H6.5V39.5ZM8.5 39.5H9.5V38.5H8.5V39.5ZM10.5 39.5H11.5V38.5H10.5V39.5ZM12.5 39.5H13.5V38.5H12.5V39.5ZM14.5 39.5H15.5V38.5H14.5V39.5ZM16.5 39.5H17.5V38.5H16.5V39.5ZM18.5 39.5H19.5V38.5H18.5V39.5ZM20.5 39.5H21.5V38.5H20.5V39.5ZM22.5 39.5H23.5V38.5H22.5V39.5ZM24.5 39.5H25.5V38.5H24.5V39.5ZM26.5 39.5H27.5V38.5H26.5V39.5ZM28.5 39.5H29.5V38.5H28.5V39.5ZM30.5 39.5H31.5V38.5H30.5V39.5ZM32.5 39.5H33.5V38.5H32.5V39.5ZM34.5 39.5H35.5V38.5H34.5V39.5ZM36.5 39.5H37.5V38.5H36.5V39.5ZM38.5 38.5V39.5H39.5V38.5H38.5ZM40.5 39.5H41V38.5H40.5V39.5ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ImageSkeletonHorizontal() {
  return (
    <div className="flex flex-row gap-x-[6px]">
      <ImageSkeleton className="text-white/[8%]" />
      <ImageSkeleton className="text-white/15" />
      <ImageSkeleton className="text-white/50" />
      <ImageSkeleton className="text-white/15" />
      <ImageSkeleton className="text-white/[8%]" />
    </div>
  );
}

export function ImageSkeletonVertical() {
  return (
    <div className="flex flex-col gap-y-[5px]">
      <ImageSkeleton className="text-white/15" />
      <ImageSkeleton className="text-white/50" />
      <ImageSkeleton className="text-white/15" />
    </div>
  );
}
