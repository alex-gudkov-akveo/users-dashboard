import { FC, ChangeEvent } from 'react';
import style from './style.module.scss';

type InputProps = {
  type?: 'text' | 'date';
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  testId?: string;
};

const Input: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  testId
}) => {
  return (
    <input
      className={style.field}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      data-testid={testId ?? 'input'}
    />
  );
};

export default Input;
