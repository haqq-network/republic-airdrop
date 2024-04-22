import clsx from 'clsx';

export function PurchaseFailureBlock({ className }: { className?: string }) {
  return (
    <div className={clsx('max-w-[600px] text-[18px]', className)}>
      Unfortunately, the address of the connected wallet is not on the list of
      ISLM purchasers on Republic. If that's not the case email us at
      <a className="text-main-red ml-[4px]" href="mailto:problem@haqq.network">
        problem@haqq.network
      </a>
    </div>
  );
}
