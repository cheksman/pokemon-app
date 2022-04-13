import React from "react";

type Props = {
  name: string;
  type: string;
  placeholder: string;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  containerClassName?: string;
  className?: string;
};
const Input: React.FC<Props> = ({
  name,
  type,
  placeholder,
  onChange,
  value,
  containerClassName,
  className,
}) => {
  return (
    <div
      className={
        containerClassName ? containerClassName : "mx-auto min-w-full mb-1"
      }
    >
      <input
        className={
          className
            ? className
            : "rounded border border-solid text-sm text-gray-600 focus:border-opacity-0 border-gray-400 h-9 placeholder-gray-300 p-2 min-w-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
        }
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
