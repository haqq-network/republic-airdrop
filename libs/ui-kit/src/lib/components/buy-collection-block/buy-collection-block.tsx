import Image from 'next/image';
import { Text } from '../typography/text';

export function BuyCollectionBlock({
  commission,
  image,
  title,
}: {
  title: string;
  commission: number;
  image: string;
}) {
  return (
    <div className="flex cursor-pointer flex-row items-center gap-x-[12px] rounded-[12px] border border-white/15 p-[12px] transition-colors duration-150 hover:border-white/50">
      <Image
        alt=""
        src={image}
        width={48}
        height={48}
        className="rounded-[8px]"
      />
      <div className="flex flex-col">
        <Text weight="extrabold">{title}</Text>
        <div className="flex flex-row gap-x-[8px]">
          <Text size="small" className="text-white/50">
            Royalties
          </Text>
          <Text size="small" className="text-main-yellow">
            {commission}%
          </Text>
        </div>
      </div>
    </div>
  );
}
