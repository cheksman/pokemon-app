import React from "react";

type Props = {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  containerClassName?: string;
  className?: string;
  min?: string;
  max?: string;
  disabled?: boolean
};
const Input: React.FC<Props> = ({
  name,
  type,
  placeholder,
  onChange,
  value,
  className,
  disabled,
  min,
  max,
}) => {
  return (
    <input
      className={
        className
          ? className
          : "rounded-full h-16 border-4 border-solid text-sm text-gray-600 focus:border-opacity-0 border-orange-400 placeholder-gray-300 p-2 min-w-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
      }
      name={name}
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  );
};

export default Input;
