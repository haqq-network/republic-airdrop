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
        This page is specially designed for users who participated in the 3rd
        wave on Axle but whose responses to the "Center HAQQ wallet" prompt
        weren't saved in Galxe. To change the address, you must log in under the
        same wallet address as you passed the 3rd wave on Galxe
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="font-clash text-[20px]">Who Can Update</div>
        <div>
          Users whose answers to the question of the main wallet address were
          lost on 3rd wave and users who didn't specify their wallet during the
          3rd wave are eligible to update their address her
        </div>
      </div>
    </div>
  );
}
