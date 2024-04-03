import clsx from 'clsx';
import { HaqqButton } from '@haqq-nft/ui-kit';

export function ConnectWalletButtons({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'flex w-full flex-col items-center gap-[12px] sm:w-fit',
        className,
      )}
    >
      <div>You should connect wallet first</div>
      <HaqqButton variant={2} className="w-full uppercase sm:w-fit">
        Injected wallet
      </HaqqButton>
      <HaqqButton variant={2} className="w-full uppercase sm:w-fit">
        Wallet connect
      </HaqqButton>
      <HaqqButton variant={2} className="w-full uppercase sm:w-fit">
        Keplr connect
      </HaqqButton>
    </div>
  );
}
