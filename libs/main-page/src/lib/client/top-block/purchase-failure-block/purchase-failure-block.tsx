import clsx from 'clsx';

export function PurchaseFailureBlock({ className }: { className?: string }) {
  return (
    <div className={clsx('max-w-[600px] text-[18px]', className)}>
      Unfortunately, the address of the connected wallet is not on the list of
      ISLM purchasers on Republic.
    </div>
  );
}
