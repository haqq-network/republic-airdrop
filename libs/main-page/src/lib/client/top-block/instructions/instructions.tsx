import clsx from 'clsx';

export function Instructions({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'flex max-w-[800px] flex-col gap-[24px] rounded-[8px] bg-[#202021] px-[28px] py-[32px] font-[500]',
        className,
      )}
    >
      <div>
        Welcome to the page designed for users who participated in the ISLM
        token public sale on Republic. This page allows you to provide and
        confirm your address to receive a special bonus as our thanks for your
        patience during the token distribution process.
      </div>
      <div className="flex flex-col gap-[12px]">
        <div>
          To participate, please connect the wallet you used during the token
          sale. Here, you can confirm your current address or provide a new one
          where you would like to receive your tokens. We are committed to
          ensuring all participants have time to submit their information, with
          bonuses scheduled for distribution in the coming weeks.If you
          encounter a message indicating that your wallet address does not match
          our records of ISLM purchasers on Republic, please ensure you are
          connecting the correct wallet used during the sale.
        </div>
      </div>
    </div>
  );
}
