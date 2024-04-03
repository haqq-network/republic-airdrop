import { ReactElement } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { AdditionalInputProps, Input } from './input';

export interface FormError {
  message: string | undefined;
}

export interface HookedInputProps<T extends Record<string, any>>
  extends Omit<AdditionalInputProps<any>, 'error' | 'onChange'> {
  id: Path<T>;
  error?: FormError;
  register: UseFormRegister<T>;
}

export function HookedFormInput<T extends Record<string, any>>({
  id,
  register,
  error,
  ...restProps
}: HookedInputProps<T>): ReactElement {
  return (
    <Input
      id={id}
      error={error && error.message}
      {...restProps}
      {...register(id)}
    />
  );
}
