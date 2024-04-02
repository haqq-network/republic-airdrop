import { ReactElement } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { Textarea, TextareaProps } from './textarea';

interface FormError {
  message: string | undefined;
}

export interface HookedTextareaProps<T extends Record<string, any>>
  extends Omit<TextareaProps, 'error' | 'onChange'> {
  id: Path<T>;
  error?: FormError;
  register: UseFormRegister<T>;
}

export function HookedFormTextarea<T extends Record<string, any>>({
  id,
  register,
  error,
  ...restProps
}: HookedTextareaProps<T>): ReactElement {
  return (
    <Textarea
      id={id}
      error={error && error.message}
      {...restProps}
      {...register(id)}
    />
  );
}
