'use client';

import { useState } from 'react';
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { formatEthDecimal } from '@haqq-nft/utils';
import { Button } from '../../button/button';
import { InfoIconSquare } from '../../icons/icons';
import { HookedFormInput } from '../../input/hooked-form-input';
import { BlockLoading } from '../../page-loader/page-loader';
import { Tooltip } from '../../tooltip/tooltip';
import { HaqqHeading } from '../../typography/heading';
import './styles.css';

export type FormError = {
  message: string | undefined;
};

export interface IFields {
  gap: number;
  tokenAmount?: number;
}

const validGapTooltipText = `The price shift that you buy back, the value of the token changes with each issued token. Since transactions for mint tokens can be sent by several users at once, the first one will be executed according to the original one, and the price for subsequent ones will be increased due to the release of the first one, and GAP allows you to specify which delta you are ready to accept. \nMinimum 0% 0,1% ..... 99% really in the range between 0 - 0.1% - 3% -5% The difference between the actual price and the GAP price will be returned to the user. If the price becomes higher than the GAP, the transaction will not be executed.`;

const ValidGapTooltip = () => {
  return (
    <Tooltip
      className="!w-[240px] whitespace-pre-line text-white/50"
      text={validGapTooltipText}
    >
      <InfoIconSquare className="hidden cursor-pointer sm:block" />
    </Tooltip>
  );
};

const ValidGapHintForMobile = () => {
  const [isShown, setIsShown] = useState(false);

  const toggleIsShown = () => {
    setIsShown((prev) => {
      return !prev;
    });
  };

  return (
    <div className="font-guise block text-[12px] sm:hidden">
      <div
        className={`content ${isShown ? 'show' : ''} whitespace-pre-line text-white/50`}
      >
        {validGapTooltipText}
      </div>
      <div onClick={toggleIsShown} className="cursor-pointer text-[#EC5728]">
        {isShown ? 'Hide info about GAP' : 'Show more info about GAP'}
      </div>
    </div>
  );
};

const MintBlock = ({
  tokenAmount,
  price,
  isLoading,
  isPending,
  estimated,
}: {
  tokenAmount?: number;
  price: bigint;
  isLoading?: boolean;
  isPending?: boolean;
  estimated: bigint;
}) => {
  const disabled = !tokenAmount || tokenAmount === 0 || isPending || isLoading;

  return (
    <div className="font-clash border-haqq-border flex w-full flex-col gap-[17px] rounded-[12px] border px-[24px] py-[16px] sm:w-fit sm:flex-row">
      <div>
        <div className="flex gap-[7px] text-[20px]">
          <div className={disabled ? 'text-white/25' : 'text-white'}>
            {formatEthDecimal(estimated)}
          </div>
          <div className="text-white/50">ISLM need</div>
        </div>
        <div className="text-[12px] text-white/50">
          {isLoading ? (
            <BlockLoading />
          ) : (
            `≈ ${formatEthDecimal(price)} ISLM per token`
          )}
        </div>
      </div>
      <Button
        type="submit"
        isLoading={isPending}
        className={`!font-clash rounded-[6px] !bg-white !font-medium !text-[#0D0D0E] ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer opacity-100'}`}
      >
        Mint
      </Button>
    </div>
  );
};

interface IProps {
  isLoading?: boolean;
  isPending?: boolean;
  onMint: (data: IFields) => void;
  price: bigint;
  tokenAmount?: number;
  register: UseFormRegister<IFields>;
  handleSubmit: UseFormHandleSubmit<IFields>;
  formState: FormState<IFields>;
  loadingEstimation?: boolean;
  estimated: bigint;
}

export function MintForm({
  tokenAmount = 0,
  onMint,
  isLoading,
  handleSubmit,
  formState,
  isPending,
  register,
  price,
  loadingEstimation,
  estimated,
}: IProps) {
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onMint)}
      className="font-clash flex w-full flex-col gap-y-[20px]"
    >
      <HaqqHeading>Mint form</HaqqHeading>

      <div className="flex flex-col gap-y-[20px]">
        <div className="flex w-full flex-col items-baseline gap-[16px] sm:flex-row">
          <HookedFormInput
            id="tokenAmount"
            name="tokenAmount"
            className="w-full sm:w-[70%]"
            label="Mint amount"
            placeholder="From 0 to 10 000 000 000"
            type="number"
            required
            error={formState.errors.tokenAmount as FormError}
            register={register}
          />
          <HookedFormInput
            name="gap"
            id="gap"
            className="!w-[50%] sm:w-[30%]"
            label="Valid GAP"
            placeholder="From 0 to 99"
            labelRightSlot={<ValidGapTooltip />}
            rightSlot="%"
            type="number"
            error={formState.errors.gap as FormError}
            register={register}
          />

          <ValidGapHintForMobile />
        </div>

        <MintBlock
          tokenAmount={tokenAmount}
          price={price}
          isLoading={isLoading || loadingEstimation}
          isPending={isPending}
          estimated={estimated}
        />
      </div>
    </form>
  );
}
