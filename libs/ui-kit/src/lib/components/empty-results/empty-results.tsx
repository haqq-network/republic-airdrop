import clsx from 'clsx';
import { SixFramesIcon } from '../icons/icons';
import { Text } from '../typography/text';

export function EmptyResults({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center pb-[310px] pt-[180px]',
        className,
      )}
    >
      <SixFramesIcon />
      <Text className="text-[20px] font-[600]">Nothing found</Text>
      <Text className="text-[14px] font-[500] text-white/[50%]">
        No results found based on the given conditions
      </Text>
    </div>
  );
}
