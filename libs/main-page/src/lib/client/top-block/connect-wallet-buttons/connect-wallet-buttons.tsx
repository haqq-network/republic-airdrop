import clsx from 'clsx';
import { HaqqButton } from '@haqq-nft/ui-kit';

export function ConnectWalletButtons({ className }: { className?: string }) {
  return (
    <div
      className={clsx('flex w-fit flex-col items-center gap-[12px]', className)}
    >
      <div>You should connect wallet first</div>
      <HaqqButton variant={2} className="w-fit uppercase">
        Injected wallet
      </HaqqButton>
      <HaqqButton variant={2} className="w-fit uppercase">
        Wallet connect
      </HaqqButton>
      <HaqqButton variant={2} className="w-fit uppercase">
        Keplr connect
      </HaqqButton>
    </div>
  );
}
