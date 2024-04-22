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
        This page is specially designed for users who participated in the public
        sale of tokens on Republic in order to collect addresses to receive a
        bonus for the long wait for token distribution.
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="font-clash text-[20px]">Who Can Use</div>
        <div>
          All users who bought ISLMs on Republic can participate. To
          participate, you need to connect the wallet that you specified when
          buying tokens. On the page you can specify the address to receive
          tokens, it can coincide with your current address or be any address
          you choose. The bonuses will be send in a few weeks so that all users
          have time to provide a receiving address.
        </div>
      </div>
    </div>
  );
}
