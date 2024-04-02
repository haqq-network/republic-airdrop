import clsx from 'clsx';
import {
  BagIcon,
  CheckIcon,
  EyeIcon,
  StarIcon,
  TimerIcon,
  WaitingCircleIcon,
  XMarkLargeIcon,
} from '../icons/icons';

export enum NFTLabelType {
  pending = 'pending',
  approved = 'approved',
  rejected = 'rejected',
  declined = 'declined',
  basket = 'basket',
  favorite = 'favorite',
  moderation = 'moderation',
  expired = 'expired',
  revoked = 'revoked',
}

export function NFTLabel({
  type,
  className,
}: {
  type: NFTLabelType;
  className?: string;
}) {
  if (type === NFTLabelType.rejected) {
    return (
      <div
        className={clsx(
          'bg-main-red w-fit rounded-[10px] px-[8px] py-[2px]',
          className,
        )}
      >
        <div className="flex flex-row items-center gap-x-[6px] text-white">
          <XMarkLargeIcon className="h-[16px] w-[16px]" /> Rejected
        </div>
      </div>
    );
  }
  if (type === NFTLabelType.basket) {
    return (
      <div
        className={clsx(
          'bg-default-green w-fit rounded-[10px] px-[8px] py-[5px] text-[#0D0D0E]',
          className,
        )}
      >
        <BagIcon className="h-[16px] w-[16px]" />
      </div>
    );
  }
  if (type === NFTLabelType.favorite) {
    return (
      <div
        className={clsx(
          'bg-dark-graphite w-fit rounded-[10px] px-[8px] py-[5px] text-white',
          className,
        )}
      >
        <StarIcon className="h-[16px] w-[16px]" />
      </div>
    );
  }
  if (type === NFTLabelType.moderation) {
    return (
      <div
        className={clsx(
          'bg-main-yellow w-fit rounded-[10px] px-[8px] py-[2px]',
          className,
        )}
      >
        <div className="flex flex-row items-center gap-x-[6px] text-white">
          <EyeIcon className="h-[16px] w-[16px]" /> On moderation
        </div>
      </div>
    );
  }
  if (type === NFTLabelType.expired) {
    return (
      <div
        className={clsx('w-fit rounded-[10px] px-[8px] py-[2px]', className)}
      >
        <div className="text-main-red flex flex-row items-center gap-x-[6px]">
          <TimerIcon className="h-[16px] w-[16px]" /> Expired
        </div>
      </div>
    );
  }
  if (type === NFTLabelType.revoked) {
    return (
      <div
        className={clsx('w-fit rounded-[10px] px-[8px] py-[2px]', className)}
      >
        <div className="text-main-red flex flex-row items-center gap-x-[6px]">
          <XMarkLargeIcon className="h-[16px] w-[16px]" /> Revoked
        </div>
      </div>
    );
  }
  if (type === NFTLabelType.approved) {
    return (
      <div
        className={clsx(
          'bg-default-green w-fit rounded-[10px] px-[8px] py-[5px] text-[#0D0D0E]',
          className,
        )}
      >
        <div className="flex flex-row items-center gap-x-[6px] text-white">
          <CheckIcon className="h-[16px] w-[16px]" /> Approved
        </div>
      </div>
    );
  }
  if (type === NFTLabelType.declined) {
    return (
      <div
        className={clsx(
          'bg-main-red w-fit rounded-[10px] px-[8px] py-[2px]',
          className,
        )}
      >
        <div className="flex flex-row items-center gap-x-[6px] text-white">
          <XMarkLargeIcon className="h-[16px] w-[16px]" /> Declined
        </div>
      </div>
    );
  }
  if (type === NFTLabelType.pending) {
    return (
      <div
        className={clsx('w-fit rounded-[10px] px-[8px] py-[2px]', className)}
      >
        <div className="text-main-yellow flex flex-row items-center gap-x-[6px]">
          <WaitingCircleIcon className="h-[16px] w-[16px]" /> Pending
        </div>
      </div>
    );
  }
}
