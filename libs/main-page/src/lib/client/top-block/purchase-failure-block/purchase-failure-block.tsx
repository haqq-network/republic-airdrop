import clsx from 'clsx';

export function PurchaseFailureBlock({ className }: { className?: string }) {
  return (
    <div className={clsx('max-w-[600px] text-[18px]', className)}>
      Unfortunately you didn't buy ISLM on Republic, if that's not the case
      email us at
      <a className="text-main-red ml-[4px]" href="mailto:problem@haqq.network">
        problem@haqq.network
      </a>
    </div>
  );
}
